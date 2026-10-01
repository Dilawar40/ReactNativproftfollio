import { site } from "../data/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
        <a href="#top" className="text-base font-semibold">
          {site.shortName}
        </a>
        <nav aria-label="Sections" className="flex gap-5 overflow-x-auto">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 py-2 text-sm text-muted hover:text-fg">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
