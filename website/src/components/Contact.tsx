"use client";

import { FormEvent } from "react";
import { site } from "../data/site";

export function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = clean(String(form.get("name") || ""));
    const email = clean(String(form.get("email") || ""));
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
        <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight">
          Contact
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          Tell me what you want to build. I usually reply within a day.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-ghost" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="btn btn-ghost"
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <ExternalLink href={site.linkedin} label="LinkedIn" />
          <ExternalLink href={site.upwork} label="Upwork" />
        </div>

        <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={80}
              className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={120}
              className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          <p className="text-sm leading-6 text-muted">This opens your email app with the message ready to send.</p>
        </form>

        <p className="mt-16 text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </section>
  );
}

function ExternalLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return <span className="btn btn-ghost">{label} — TODO</span>;
  }

  return (
    <a className="btn btn-ghost" href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

function clean(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}
