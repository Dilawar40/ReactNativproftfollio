"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, projects } from "../data/profile";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-line pb-4 text-sm">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={filter === category ? "text-fg" : "text-muted hover:text-fg"}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="divide-y divide-line border-y border-line">
        {list.map((project, index) => (
          <Link
            key={`${project.id}-row`}
            href={`/work/${project.id}`}
            className="grid grid-cols-[48px_1fr_auto] items-center gap-4 py-4 text-sm hover:bg-soft/80 md:grid-cols-[56px_1.4fr_1fr_auto]"
          >
            <span className="text-muted">{String(index + 1).padStart(2, "0")}</span>
            <span>{project.name}</span>
            <span className="hidden text-muted md:block">{project.tagline}</span>
            <span className="text-muted">{project.year}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
