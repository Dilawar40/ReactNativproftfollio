import Link from "next/link";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="serif text-3xl">{profile.shortName}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            React Native for iOS and Android. Available for remote product work.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="hover:underline">
            {profile.phone}
          </a>
          <Link href="/cv" className="hover:underline">
            Curriculum vitae
          </Link>
        </div>
      </div>
    </footer>
  );
}
