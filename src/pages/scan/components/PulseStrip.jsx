export function PulseStrip({ stepIndex }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <svg width="110" height="26" viewBox="0 0 110 26" className="shrink-0">
        <path
          d="M0,13 L26,13 L32,4 L40,22 L46,13 L110,13"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="pulse-path"
        />
      </svg>
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
      <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
        Step {stepIndex} of 3
      </span>
      <style jsx>{`
        .pulse-path {
          stroke-dasharray: 8 6;
          animation: pulseTravel 1.1s linear infinite;
        }
        @keyframes pulseTravel {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -140;
          }
        }
      `}</style>
    </div>
  );
}
