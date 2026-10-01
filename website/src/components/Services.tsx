const services = [
  {
    title: "AI Integration & Chatbots",
    benefit: "Customers get answers in the app, any time, without waiting on you.",
  },
  {
    title: "App Development",
    benefit: "One build for iPhone and Android, so you are not paying for two separate apps.",
  },
  {
    title: "Automation (n8n / LLM workflows)",
    benefit: "Repeat work — replies, forms, handoffs — runs in the background.",
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
        <h2 id="services-heading" className="text-3xl font-semibold tracking-tight">
          Services
        </h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="rounded-2xl border border-line p-6">
              <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{service.benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
