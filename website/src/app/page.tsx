import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { featuredProjects, profile, projects, stats } from "../data/profile";

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            {profile.subtitle} · {profile.location}
          </p>
          <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight sm:text-7xl">
            Muhammad Dilawar
            <br />
            Qayoum
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/work" className="rounded-full bg-invert px-5 py-2.5 text-sm text-invert-text">
              Selected work
            </Link>
            <Link href="/cv" className="rounded-full border border-line px-5 py-2.5 text-sm">
              View CV
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-5">
              <p className="text-3xl font-medium tracking-tight">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-line py-4">
        <p className="animate-none text-sm text-muted">
          {projects.map((project) => project.name).join("  ·  ")}
        </p>
      </section>

      <section>
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl font-medium tracking-tight">Selected work</h2>
          <Link href="/work" className="text-sm text-muted hover:text-fg">
            All projects
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
