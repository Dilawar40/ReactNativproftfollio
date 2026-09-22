import { education, experience, profile, skills } from "../../data/profile";

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">About</p>
        <h1 className="serif mt-3 text-5xl">Experience</h1>
        <p className="mt-6 text-lg leading-8 text-muted">{profile.about.join(" ")}</p>
      </section>
      <section className="divide-y divide-line border-y border-line">
        {experience.map((job) => (
          <article key={job.id} className="grid gap-6 py-10 md:grid-cols-[180px_1fr]">
            <p className="text-sm text-muted">{job.period}</p>
            <div>
              <h2 className="text-xl tracking-tight">{job.role}</h2>
              <p className="mt-1 text-muted">
                {job.company} · {job.location}
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-7 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Education</p>
          <h2 className="serif mt-3 text-3xl">{education.degree}</h2>
          <p className="mt-2 text-muted">
            {education.school}
            <br />
            {education.period}
          </p>
        </div>
        <div className="space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{group}</p>
              <p className="mt-1 text-sm leading-6">{items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
