import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Droplet } from "lucide-react";

function genWave(n = 22) {
  return Array.from({ length: n }, () => 25 + Math.random() * 75);
}

function LiveBadge() {
  return (
    <span className="flex items-center gap-1 text-xs font-medium text-emerald-500">
      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
      Live
    </span>
  );
}

function Waveform({ values, colorLight, colorDark, highlightCount = 7 }) {
  return (
    <div className="flex items-end gap-[3px] h-8 mt-3">
      {values.map((v, i) => {
        const isRecent = i >= values.length - highlightCount;
        return (
          <div
            key={i}
            className="w-full rounded-full transition-all duration-300 ease-out"
            style={{
              height: `${v}%`,
              backgroundColor: isRecent ? colorDark : colorLight,
            }}
          />
        );
      })}
    </div>
  );
}

export function ScanningStep({ onComplete }) {
  const [percent, setPercent] = useState(20);
  const [hr, setHr] = useState(98);
  const [spo2, setSpo2] = useState(97);
  const [hrWave, setHrWave] = useState(() => genWave());
  const [spo2Wave, setSpo2Wave] = useState(() => genWave());
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPercent((p) => {
        const next = Math.min(100, p + Math.random() * 9 + 6);
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => onComplete({ hr: 102, spo2: 98 }), 500);
        }
        return next;
      });
      setHr(95 + Math.round(Math.random() * 10));
      setSpo2(96 + Math.round(Math.random() * 3));
      setHrWave((w) => [...w.slice(1), 25 + Math.random() * 75]);
      setSpo2Wave((w) => [...w.slice(1), 25 + Math.random() * 75]);
    }, 350);
    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 shadow-sm  dark:border-slate-800 p-4 w-full max-w-xl mx-auto gap-12 flex flex-col">
      {/* Circular progress with heart icon */}
      <div className="flex justify-center">
        <div className="relative size-44">
          <svg width="176" height="176" viewBox="0 0 176 176">
            <circle
              cx="88"
              cy="88"
              r={radius}
              fill="none"
              stroke="currentColor"
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="7"
            />
            <circle
              cx="88"
              cy="88"
              r={radius}
              fill="none"
              stroke="#2563eb"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 88 88)"
              style={{ transition: "stroke-dashoffset 0.3s linear" }}
            />
          </svg>
          <div className="absolute w-33 h-33 top-3 left-3 flex flex-col items-center justify-center rounded-full bg-blue-50/60 dark:bg-blue-950/20">
            <Heart className="size-7 text-blue-600 mb-1.5" strokeWidth={1.75} />
            <span className="text-sm text-slate-400 dark:text-slate-500">
              Analyzing...
            </span>
          </div>
        </div>
      </div>

      {/* Percent complete */}
      <div className="text-center -mt-10">
        <span className="text-4xl font-bold text-slate-900 dark:text-white">
          {Math.round(percent)}%
        </span>
        <span className="text-lg text-slate-400 ml-1.5">complete</span>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="border-slate-100 shadow-md px-4 gap-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Heart className="size-3.5 text-rose-500" /> Heart Rate
              </p>
              <LiveBadge />
            </div>
            <p className="font-semibold text-3xl text-slate-900 dark:text-white text-start">
              {hr}
              <span className="text-xs text-slate-400 font-normal ml-1">
                BPM
              </span>
            </p>
            <Waveform values={hrWave} colorLight="#fecaca" colorDark="#ef4444" />
        </Card>

        <Card className="border-slate-100 shadow-md px-4 gap-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Droplet className="size-3.5 text-blue-500" /> Blood Oxygen
              </p>
              <LiveBadge />
            </div>
            <p className="font-semibold text-3xl text-slate-900 dark:text-white text-start">
              {spo2}
              <span className="text-xs text-slate-400 font-normal ml-1 ">
                SpO₂ %
              </span>
            </p>
            <Waveform values={spo2Wave} colorLight="#bfdbfe" colorDark="#3b82f6" />
        </Card>
      </div>

      <p className="text-xs text-slate-400 text-center leading-relaxed">
        Stay still for the most accurate reading. Analysis typically
        <br />
        takes about 30 seconds.
      </p>
    </div>
  );
}