import { education, experience, profile, projects, skills } from "../../data/profile";

export default function CvPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-muted">Curriculum vitae</p>
        <h1 className="serif mt-3 text-5xl">{profile.name}</h1>
        <p className="mt-3 text-muted">
          {profile.title} · {profile.location}
        </p>
        <p className="mt-1 text-sm">
          <a href={profile.phoneHref} className="hover:underline">
            {profile.phone}
          </a>
          {" · "}
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/cv.html" className="rounded-full bg-invert px-5 py-2.5 text-sm text-invert-text">
            Print / PDF
          </a>
        </div>
      </header>
      <section>
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Summary</h2>
        <p className="mt-3 leading-7 text-muted">{profile.summary}</p>
      </section>
      <section>
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Products</h2>
        <p className="mt-3 leading-7">{projects.map((project) => project.name).join(" · ")}</p>
      </section>
      <section className="space-y-8">
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Experience</h2>
        {experience.map((job) => (
          <div key={job.id}>
            <p className="text-sm text-muted">{job.period}</p>
            <h3 className="mt-1 text-lg">
              {job.role} — {job.company}
            </h3>
            <ul className="mt-3 space-y-1 text-sm leading-7 text-muted">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Skills</h2>
        <div className="mt-4 space-y-3">
          {Object.entries(skills).map(([group, items]) => (
            <p key={group} className="text-sm leading-6">
              <span className="text-muted">{group} — </span>
              {items.join(", ")}
            </p>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">Education</h2>
        <p className="mt-3">
          {education.degree}
          <br />
          <span className="text-muted">
            {education.school}, {education.period}
          </span>
        </p>
      </section>
    </article>
  );
}
