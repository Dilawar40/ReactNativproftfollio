import { WorkGrid } from "../../components/WorkGrid";

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">Index</p>
        <h1 className="serif mt-3 text-5xl">Work</h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Live streaming, travel eSIM, guitar hardware, AI learning, education, and commerce — shipped for Android and iOS.
        </p>
      </div>
      <WorkGrid />
    </div>
  );
}
