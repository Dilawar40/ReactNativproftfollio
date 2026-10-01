import { site } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
      <p className="text-sm font-medium text-accent">{site.name}</p>
      <p className="mt-2 text-sm text-muted">App developer</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
        Mobile apps with AI built in
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
        I build iPhone and Android apps for businesses. If AI will help your customers, I build that in too.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">
          View Work
        </a>
        <a href="#contact" className="btn btn-ghost">
          Contact Me
        </a>
      </div>
    </section>
  );
}
