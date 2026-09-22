import Link from "next/link";
import { Project } from "../data/profile";
import { ProjectCover } from "./ProjectCover";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.id}`} className="group block">
      <ProjectCover
        id={project.id}
        name={project.name}
        accent={project.accent}
        className="aspect-[16/10] rounded-2xl"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg tracking-tight group-hover:underline">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <p className="shrink-0 text-xs text-muted">{project.year}</p>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
        {project.category} · {project.platforms.join(" / ")}
      </p>
    </Link>
  );
}
