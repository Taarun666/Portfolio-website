"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GitHubStarsButtonProps {
  username: string;
  repo: string;
  className?: string;
}

export function GitHubStarsButton({
  username,
  repo,
  className,
}: GitHubStarsButtonProps) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data?.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, [username, repo]);

  return (
    <a
      href={`https://github.com/${username}/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent",
        className
      )}
    >
      <Star className="h-4 w-4" />
      <span>Star</span>
      {stars !== null && (
        <span className="text-muted-foreground">{stars}</span>
      )}
    </a>
  );
}
