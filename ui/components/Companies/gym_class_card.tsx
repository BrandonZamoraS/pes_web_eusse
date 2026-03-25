export interface ClassCardProps {
  type: string;
  title: string;
  description: string;
  schedule: Record<string, string>;
}

export default function GymClassCard({ type, title, description, schedule }: ClassCardProps) {
  return (
    <div className="rounded-md bg-white/90 p-6 shadow-lg shadow-brand-900/10">
      <div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            {type}
          </p>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm text-brand-700">{description}</p>
      <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {Object.entries(schedule).map(([day, times]) => (
          <div
            key={`${title}-${day}`}
            className="rounded-md bg-brand-50 px-3 py-2 text-brand-800 shadow-sm shadow-brand-900/5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              {day}
            </p>
            <p className="font-semibold">{times}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
