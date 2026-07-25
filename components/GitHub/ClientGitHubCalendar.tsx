"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function ClientGitHubCalendar(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder of similar height to avoid layout shift
    return <div style={{ minHeight: "150px" }} />;
  }

  return <GitHubCalendar {...props} />;
}
