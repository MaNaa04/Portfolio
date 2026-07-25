import { GitHubCalendar } from 'react-github-calendar';
import RecentCommitsMarquee from './RecentCommitsMarquee';

async function fetchGitHubData(username: string) {
  try {
    // 1. Fetch repos to get total count and sum up all commits
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      next: { revalidate: 3600 },
    });
    
    let repoCount = 0;
    let totalContributions = 0;
    
    if (reposRes.ok) {
      const repos = await reposRes.json();
      repoCount = repos.length;
      
      // Fetch commit counts for each repository in parallel
      const commitPromises = repos.map(async (repo: any) => {
        try {
          const res = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`, {
            next: { revalidate: 3600 }
          });
          if (res.ok) {
            const link = res.headers.get("link");
            if (link) {
              const match = link.match(/page=(\d+)>; rel="last"/);
              if (match) return parseInt(match[1]);
            } else {
              const commits = await res.json();
              if (Array.isArray(commits)) return commits.length;
            }
          }
        } catch (e) {
          // ignore
        }
        return 0;
      });
      
      const counts = await Promise.all(commitPromises);
      totalContributions = counts.reduce((acc, count) => acc + count, 0);
    }

    // 3. Fetch search commits (recent public commits across all repos authored by the user)
    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:${username}&sort=author-date&order=desc&per_page=5`,
      {
        headers: {
          Accept: "application/vnd.github.cloak-preview",
        },
        next: { revalidate: 3600 },
      }
    );

    let commits: any[] = [];
    if (commitsRes.ok) {
      const searchData = await commitsRes.json();
      commits = searchData.items.map((item: any) => {
        const diff = Math.floor(Date.now() / 1000) - new Date(item.commit.author.date).getTime() / 1000;
        let timeStr = "";
        if (diff < 3600) timeStr = `${Math.floor(diff / 60)} mins ago`;
        else if (diff < 86400) timeStr = `${Math.floor(diff / 3600)} hours ago`;
        else timeStr = `${Math.floor(diff / 86400)} days ago`;

        return {
          repo: item.repository?.name || "Unknown",
          message: item.commit.message.split("\n")[0],
          time: timeStr,
        };
      });
    }

    if (commits.length === 0) {
      commits.push({
        repo: "portfolio",
        message: "No recent public commits found.",
        time: "Recently",
      });
    }

    return {
      repoCount,
      commits,
      totalContributions,
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return {
      repoCount: 0,
      commits: [],
      totalContributions: 0,
    };
  }
}

export default async function GitHubSection() {
  const username = "MaNaa04";
  const { repoCount, commits, totalContributions } = await fetchGitHubData(username);

  // Custom theme matching the original orange aesthetic
  const customTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#4D1D00', '#993700', '#E65300', '#FF5C00'],
  };

  return (
    <div className="flex flex-col gap-6 min-w-0">
      {/* Heatmap + Commits */}
      <div className="w-full min-w-0">
        <h4 className="font-mono text-[11px] tracking-widest text-[#A3A3A3] uppercase mb-4">
          GitHub
        </h4>
        <div className="overflow-x-auto pb-2 flex">
          <GitHubCalendar
            username={username}
            theme={customTheme}
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            blockRadius={2}
          />
        </div>
        <RecentCommitsMarquee commits={commits} />
      </div>

      {/* Stats row */}
      <div className="border-t border-[#222222] pt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="font-mono text-[11px] text-[#525252] tracking-widest uppercase mb-1">
            Repositories
          </p>
          <p className="font-mono text-2xl text-[#A3A3A3]">{repoCount}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-[#525252] tracking-widest uppercase mb-1">
            All Time
          </p>
          <p className="font-mono text-2xl text-[#FF5C00]">
            {totalContributions.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
