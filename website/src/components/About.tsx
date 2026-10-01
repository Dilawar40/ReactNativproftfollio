import { site } from "../data/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-line">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-20 sm:py-28 md:grid-cols-[10rem_1fr] md:items-start">
        {site.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={site.photo}
            alt={site.name}
            width={160}
            height={160}
            className="h-40 w-40 rounded-2xl object-cover"
          />
        ) : (
          <div
            className="flex h-40 w-40 items-center justify-center rounded-2xl border border-dashed border-line bg-soft p-4 text-center text-sm text-muted"
            role="img"
            aria-label="Photo coming soon"
          >
            TODO: add your photo
          </div>
        )}
        <div>
          <h2 id="about-heading" className="text-3xl font-semibold tracking-tight">
            About
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
            <p>I am {site.name}, a freelance app developer in {site.location}.</p>
            <p>
              For more than two years I have built mobile apps that people already use — live video, study tools, school systems, and travel.
            </p>
            <p>I keep the work easy to follow: a clear scope, regular builds you can try, and no surprise at the end.</p>
            <p>If you have an app idea, send a short note. I will tell you honestly if I am the right person for it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
