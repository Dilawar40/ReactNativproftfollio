import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
        <h2 id="projects-heading" className="text-3xl font-semibold tracking-tight">
          Projects
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">A few apps I have shipped.</p>
        <div className="mt-12 grid gap-16">
          {projects.map((project) => (
            <article key={project.id} className="grid gap-8 border-t border-line pt-10 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:items-center">
              <ProjectMedia title={project.title} image={project.image} video={project.video} />
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm font-medium">Problem</dt>
                    <dd className="mt-1 text-base leading-7 text-muted">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium">What I built</dt>
                    <dd className="mt-1 text-base leading-7 text-muted">{project.built}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium">Result</dt>
                    <dd className="mt-1 text-base leading-7 text-muted">{project.result}</dd>
                  </div>
                </dl>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <a href={project.link} className="btn btn-primary mt-8" target="_blank" rel="noopener noreferrer">
                    View live
                  </a>
                ) : (
                  <p className="mt-8 text-sm text-muted">TODO: add a live link in projects.js</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectMedia({ title, image, video }: { title: string; image: string; video: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-line bg-soft">
      {video ? (
        <iframe
          src={video}
          title={`${title} demo`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : image ? (
        // Plain img so a path or full URL in projects.js works without extra config.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={`${title} screenshot`} width={1200} height={675} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
          <span className="text-4xl font-semibold text-accent" aria-hidden="true">
            {title.slice(0, 1)}
          </span>
          <p className="text-sm text-muted">TODO: add a screenshot in projects.js</p>
        </div>
      )}
    </div>
  );
}
