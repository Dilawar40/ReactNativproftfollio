const steps = [
  {
    title: "Discuss",
    text: "We talk about your users and agree what the first version will do.",
  },
  {
    title: "Build",
    text: "I build the app and send you something you can open on a phone.",
  },
  {
    title: "Test",
    text: "We try the real flows and fix anything that is confusing or broken.",
  },
  {
    title: "Deliver",
    text: "You get the finished app, help publishing it, and a clear way to reach me.",
  },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
        <h2 id="process-heading" className="text-3xl font-semibold tracking-tight">
          Process
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-sm font-medium text-accent">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-base leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
