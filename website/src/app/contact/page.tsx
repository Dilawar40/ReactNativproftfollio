import { profile } from "../../data/profile";

export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">Contact</p>
      <h1 className="serif text-5xl leading-tight sm:text-6xl">Let’s ship the next app.</h1>
      <p className="max-w-xl text-lg leading-8 text-muted">
        Live streaming, AI, education, travel eSIM, and hardware-connected products. Remote, store-ready delivery.
      </p>
      <div className="divide-y divide-line border-y border-line">
        <a href={`mailto:${profile.email}`} className="block py-6 text-2xl hover:underline sm:text-3xl">
          {profile.email}
        </a>
        <a href={profile.phoneHref} className="block py-6 text-2xl hover:underline sm:text-3xl">
          {profile.phone}
        </a>
        <p className="py-6 text-2xl text-muted sm:text-3xl">{profile.location}</p>
      </div>
    </div>
  );
}
