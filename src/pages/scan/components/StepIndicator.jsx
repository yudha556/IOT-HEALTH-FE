export function StepIndicator({ current, total = 3 }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i < current
              ? "w-6 bg-blue-600"
              : i === current
                ? "w-6 bg-blue-400"
                : "w-2 bg-slate-200 dark:bg-slate-700"
          }`}
        />
      ))}
      <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">
        {current} / {total}
      </span>
    </div>
  );
}
