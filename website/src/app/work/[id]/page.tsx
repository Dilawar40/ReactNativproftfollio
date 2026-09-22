import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCover } from "../../../components/ProjectCover";
import { projects } from "../../../data/profile";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: PageProps<"/work/[id]">) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  const next = projects[(projects.findIndex((item) => item.id === id) + 1) % projects.length];

  return (
    <article className="space-y-10">
      <Link href="/work" className="text-sm text-muted hover:text-fg">
        Work
      </Link>
      <header className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {project.year} · {project.category}
          </p>
          <h1 className="serif mt-3 text-5xl sm:text-6xl">{project.name}</h1>
          <p className="mt-4 text-xl text-muted">{project.tagline}</p>
        </div>
        <p className="leading-7 text-muted">{project.description}</p>
      </header>
      <ProjectCover
        id={project.id}
        name={project.name}
        accent={project.accent}
        className="h-72 rounded-3xl sm:h-96"
      />
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Role</h2>
          <p className="mt-3">{project.role}</p>
          <p className="mt-2 text-muted">{project.platforms.join(" and ")}</p>
        </section>
        <section>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">What I built</h2>
          <ul className="mt-3 space-y-2 text-muted">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Stack</h2>
        <p className="mt-3 text-lg">{project.stack.join("  ·  ")}</p>
      </section>
      <div className="flex flex-wrap gap-4">
        {project.storeUrl ? (
          <a href={project.storeUrl} target="_blank" rel="noreferrer" className="rounded-full bg-invert px-5 py-2.5 text-sm text-invert-text">
            Play Store
          </a>
        ) : null}
        {project.extraUrl ? (
          <a href={project.extraUrl} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm">
            {project.extraLabel ?? "Preview"}
          </a>
        ) : null}
      </div>
      <div className="border-t border-line pt-8">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Next</p>
        <Link href={`/work/${next.id}`} className="serif mt-2 inline-block text-3xl hover:underline">
          {next.name}
        </Link>
      </div>
    </article>
  );
}
