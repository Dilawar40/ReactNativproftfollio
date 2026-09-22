type Props = {
  id: string;
  name: string;
  accent: string;
  className?: string;
};

function hash(value: string) {
  return value.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function ProjectCover({ id, name, accent, className = "" }: Props) {
  const variant = hash(id) % 5;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accent }}>
      {variant === 0 && (
        <>
          <div className="absolute -right-8 top-6 h-40 w-40 rounded-full bg-black/15" />
          <div className="absolute bottom-8 left-10 h-24 w-56 rounded-full bg-white/25" />
        </>
      )}
      {variant === 1 && (
        <>
          <div className="absolute inset-y-0 right-1/3 w-px bg-black/20" />
          <div className="absolute left-[12%] top-[18%] h-36 w-36 rotate-6 bg-black/10" />
          <div className="absolute bottom-[16%] right-[10%] h-20 w-20 rounded-full bg-white/30" />
        </>
      )}
      {variant === 2 && (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "repeating-linear-gradient(115deg, rgba(0,0,0,0.18) 0 10px, transparent 10px 22px)",
          }}
        />
      )}
      {variant === 3 && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" preserveAspectRatio="none">
          <path d="M0 170 C 90 20, 170 210, 250 70 S 350 30, 400 150 L 400 220 L 0 220 Z" fill="rgba(0,0,0,0.16)" />
        </svg>
      )}
      {variant === 4 && (
        <div className="absolute inset-8 grid grid-cols-6 gap-2 opacity-50">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="rounded-md border border-black/20 bg-white/10" />
          ))}
        </div>
      )}
      <p className="absolute bottom-5 left-5 text-2xl font-medium tracking-tight text-black/70">{name}</p>
    </div>
  );
}
