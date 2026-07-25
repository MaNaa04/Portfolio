import RecentSubmissionsMarquee from './RecentSubmissionsMarquee';

const LC_COLS = 52;
const LC_ROWS = 7;

function HeatmapCell({ level }: { level: number }) {
  const colors: Record<number, string> = {
    0: "#161b22",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
  };
  return (
    <div
      className="w-3 h-3 rounded-[2px] transition-all duration-150 hover:opacity-80 hover:scale-110"
      style={{ backgroundColor: colors[level] ?? "#1a1a1a" }}
    />
  );
}

function Heatmap({ cols, rows, data }: { cols: number; rows: number; data: number[] }) {
  return (
    <div className="flex gap-[4px]">
      {Array.from({ length: cols }).map((_, col) => (
        <div key={col} className="flex flex-col gap-[4px]">
          {Array.from({ length: rows }).map((_, row) => (
            <HeatmapCell key={row} level={data[col * rows + row] || 0} />
          ))}
        </div>
      ))}
    </div>
  );
}

async function fetchLeetCodeData(username: string) {
  try {
    const query = `
      query getUserProfile($username: String!) { 
        matchedUser(username: $username) { 
          profile { ranking } 
          submissionCalendar 
          submitStats { 
            acSubmissionNum { difficulty count } 
          } 
        } 
        recentSubmissionList(username: $username, limit: 10) {
          title titleSlug timestamp statusDisplay
        }
        userContestRanking(username: $username) {
          rating
          topPercentage
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query, variables: { username } }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const user = data.data.matchedUser;
    const recent = data.data.recentSubmissionList || [];
    const contest = data.data.userContestRanking;

    let totalSolved = 0;
    if (user?.submitStats?.acSubmissionNum) {
      const allStat = user.submitStats.acSubmissionNum.find((s: { difficulty: string }) => s.difficulty === "All");
      if (allStat) totalSolved = allStat.count;
    }

    const rating = contest?.rating ? Math.round(contest.rating) : 0;
    const topPercentage = contest?.topPercentage ? contest.topPercentage.toFixed(1) : 0;

    // Process heatmap data
    const heatmapData: number[] = new Array(LC_COLS * LC_ROWS).fill(0);
    let totalSubmissions = 0;
    if (user?.submissionCalendar) {
      const calendar: Record<string, number> = JSON.parse(user.submissionCalendar);
      const countsByDate: Record<string, number> = {};
      for (const [timestamp, count] of Object.entries(calendar)) {
        const date = new Date(parseInt(timestamp) * 1000).toDateString();
        countsByDate[date] = (countsByDate[date] || 0) + (count as number);
        totalSubmissions += (count as number);
      }

      const today = new Date();
      for(let i = 0; i < LC_COLS * LC_ROWS; i++) {
        const d = new Date();
        d.setDate(today.getDate() - ((LC_COLS * LC_ROWS - 1) - i));
        const count = countsByDate[d.toDateString()] || 0;
        let level = 0;
        if(count > 0) level = 1;
        if(count >= 2) level = 2;
        if(count >= 4) level = 3;
        if(count >= 6) level = 4;
        heatmapData[i] = level;
      }
    }

    // Process recent submissions
    const submissions = recent.slice(0, 5).map((sub: { title: string, titleSlug: string, timestamp: string, statusDisplay: string, lang: string }) => {
      // Calculate time ago
      const diff = Math.floor(Date.now() / 1000) - parseInt(sub.timestamp);
      let timeStr = "";
      if (diff < 3600) timeStr = `${Math.floor(diff / 60)} mins ago`;
      else if (diff < 86400) timeStr = `${Math.floor(diff / 3600)} hours ago`;
      else timeStr = `${Math.floor(diff / 86400)} days ago`;

      return {
        id: sub.titleSlug + sub.timestamp,
        title: sub.title,
        status: sub.statusDisplay,
        time: timeStr,
        color: sub.statusDisplay === "Accepted" ? "#22c55e" : "#ef4444",
      };
    });

    if (submissions.length === 0) {
      submissions.push({
        id: "empty",
        title: "No recent public submissions",
        status: "Active",
        time: "Recently",
        color: "#f59e0b"
      });
    }

    return { rating, topPercentage, totalSolved, heatmapData, submissions, totalSubmissions };
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return {
      rating: 0,
      topPercentage: 0,
      totalSolved: 0,
      heatmapData: new Array(LC_COLS * LC_ROWS).fill(0),
      submissions: [],
      totalSubmissions: 0,
    };
  }
}

export default async function LeetCodeSection() {
  const username = "J9FOqTiYKg";
  const { rating, topPercentage, totalSolved, heatmapData, submissions, totalSubmissions } = await fetchLeetCodeData(username);

  const lcStats = [
    { label: "Rating", value: rating > 0 ? rating.toLocaleString() : "N/A" },
    { label: "Top", value: topPercentage > 0 ? `${topPercentage}%` : "N/A" },
    { label: "Solved", value: totalSolved.toLocaleString() },
  ];

  return (
    <div className="flex flex-col gap-6 min-w-0">
      {/* Heatmap + Submissions */}
      <div className="w-full min-w-0">
        <h4 className="font-mono text-[11px] tracking-widest text-[#A3A3A3] uppercase mb-4">LeetCode</h4>
        <div className="overflow-x-auto pb-2 flex">
          <div className="pt-[18px] min-w-max">
            <Heatmap cols={LC_COLS} rows={LC_ROWS} data={heatmapData} />
            
            {/* Heatmap Legend */}
            <div className="flex justify-between items-center mt-4 mb-1">
              <span className="text-xs text-[#A3A3A3]">{totalSubmissions} Submissions in past one year</span>
              <div className="flex items-center gap-1 text-xs text-[#A3A3A3]">
                <span className="mr-1">Less</span>
                <HeatmapCell level={0} />
                <HeatmapCell level={1} />
                <HeatmapCell level={2} />
                <HeatmapCell level={3} />
                <HeatmapCell level={4} />
                <span className="ml-1">More</span>
              </div>
            </div>
          </div>
        </div>

        <RecentSubmissionsMarquee submissions={submissions} />
      </div>

      {/* Stats row */}
      <div className="border-t border-[#222222] pt-6 grid grid-cols-3 gap-4">
          {lcStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-[11px] text-[#525252] tracking-widest uppercase mb-1">
                {stat.label}
              </p>
              <p className="font-mono text-2xl text-[#A3A3A3]">{stat.value}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
