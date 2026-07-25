export const ABOUT_ME = {
  title: "Engineering at the intersection of infrastructure and intelligence.",
  description: "I design systems that don't just work — they scale elegantly under pressure, and stay debuggable when they don't.",
  bio: "Currently focused on building resilient data pipelines and high-performance backend services. When I'm not architecting systems, I contribute to open-source tools or explore the latest in systems programming."
};

export const ACHIEVEMENTS = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    date: "2023",
    description: "Achieved the AWS Certified Solutions Architect – Associate certification, demonstrating proficiency in designing distributed systems on AWS."
  },
  {
    id: "2",
    title: "Hackathon Winner — Global Hack",
    date: "2022",
    description: "Built an AI-powered system for optimizing cloud resources, reducing costs by 30% on average for tested workloads."
  },
  {
    id: "3",
    title: "Top 1% LeetCode",
    date: "2021",
    description: "Consistently participated in weekly contests, solving complex algorithmic problems with high accuracy and speed."
  }
];

export const PROJECTS = [
  {
    id: "1",
    label: "01 / RUST CORE",
    title: "Onyx Auth",
    overview: "Zero-trust authentication service",
    description: "A secure, scalable microservice for handling OAuth2 and JWT token rotation with Redis-backed session management and zero-trust principles.",
    tags: ["Rust", "Redis", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "2",
    label: "02 / AI INFRA",
    title: "Cloud Atlas",
    overview: "Distributed system visualizer",
    description: "A real-time dashboard visualizing node health and latency across distributed clusters using WebSockets and Canvas API.",
    tags: ["TypeScript", "Node.js", "WebSockets", "Canvas API"],
    githubUrl: "https://github.com"
  },
  {
    id: "3",
    label: "03 / PLATFORM",
    title: "Nexus Folio",
    overview: "High-performance developer portfolio",
    description: "Built with Next.js, Framer Motion, and Tailwind CSS. Features smooth animations, monospace aesthetic, and a responsive developer layout.",
    tags: ["Next.js", "React", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const EXPERIENCE = [
  {
    id: "1",
    role: "Senior Backend Engineer",
    company: "Cyberdyne",
    duration: "2022 — Present",
    description: "Leading infrastructure for low-latency ingestion. Pushed availability to 99.999% while cutting compute spend 40%.",
    technologies: ["Go", "Kubernetes", "AWS", "gRPC", "Kafka"]
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Nexa Systems",
    duration: "2020 — 2022",
    description: "Architected microservices for a fintech platform. Integrated 15+ payment gateways with a unified error model.",
    technologies: ["React", "Node.js", "PostgreSQL", "GitHub Actions"]
  },
  {
    id: "3",
    role: "Backend Engineer",
    company: "Kestrel Labs",
    duration: "2018 — 2020",
    description: "Built the internal API surface and CI pipeline. Owned Postgres schema design for a 3TB analytics warehouse.",
    technologies: ["Python", "PostgreSQL", "Redis", "Docker"]
  }
];

export const TECH_STACK = {
  systems: ["Rust", "Go", "C++", "Zig", "io_uring", "gRPC"],
  data: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "Parquet", "Arrow"],
  cloud: ["Kubernetes", "Terraform", "AWS", "GCP", "Nomad", "Cilium"],
  ai: ["PyTorch", "CUDA", "Triton", "HuggingFace", "vLLM", "ONNX"],
  app: ["TypeScript", "React", "Node.js", "Python", "SQL"],
};

export const EDUCATION = [
  {
    id: "1",
    degree: "B.S. Computer Science",
    school: "University of California, Berkeley",
    duration: "2016 — 2020",
    detail: "Focus: distributed systems, compilers, and machine learning. Undergraduate researcher in the RISELab."
  },
  {
    id: "2",
    degree: "STEM Honors",
    school: "Lowell High School",
    duration: "2014 — 2016",
    detail: "Captain, competitive programming team. USACO Platinum division."
  }
];

// Generate deterministic-looking heatmap data
const generateHeatmap = (seed = 0) => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const n = (w * 7 + d + seed) % 17;
      const count = n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 3 : n < 15 ? 6 : 9;
      const level = n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 15 ? 3 : 4;
      days.push({ date: `2024-W${w}-D${d}`, count, level });
    }
    weeks.push(days);
  }
  return weeks;
};

export const GITHUB_STATS = {
  heatmap: generateHeatmap(3),
  totalContributions: 2842,
  currentStreak: 14,
  repositories: 47,
  followers: 1200,
  recentCommits: [
    { repo: "onyx", message: "fix(auth): rotate refresh tokens on failed grant", ago: "2h" },
    { repo: "onyx", message: "perf(broker): pool arrow buffers across shards", ago: "1d" },
    { repo: "atlas", message: "feat(cli): atlas diff --scope=preview", ago: "2d" },
  ]
};

export const LEETCODE_STATS = {
  heatmap: generateHeatmap(11),
  totalSolved: 612,
  ranking: 2,
  rating: 2410,
  contests: 48,
  latestSubmission: { problem: "Median of Two Sorted Arrays", status: "Accepted", ago: "3h ago" }
};

