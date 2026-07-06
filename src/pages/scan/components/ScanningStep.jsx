import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Droplet, ArrowLeft } from "lucide-react";

export function ScanningStep({ onComplete, onBack }) {
  const navigate = useNavigate();
  const [percent, setPercent] = useState(0);
  const [hr, setHr] = useState(null);
  const [spo2, setSpo2] = useState(null);
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
    }, 350);
    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Scanning in progress</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Keep your finger on the sensor.
      </p>

      <div className="flex justify-center mb-6">
        <div className="relative size-40">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="currentColor"
              className="text-slate-200 dark:text-slate-800"
              strokeWidth="8"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#2563eb"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 80 80)"
              style={{ transition: "stroke-dashoffset 0.3s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Heart className="size-5 text-blue-600" />
            <span className="font-mono text-2xl font-semibold mt-1">
              {Math.round(percent)}%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
              <Heart className="size-3.5" /> Heart rate
            </p>
            <p className="font-mono text-xl font-semibold">
              {hr ?? "--"}
              <span className="text-xs text-slate-400 font-normal"> bpm</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1">
              <Droplet className="size-3.5" /> Blood oxygen
            </p>
            <p className="font-mono text-xl font-semibold">
              {spo2 ?? "--"}
              <span className="text-xs text-slate-400 font-normal"> %</span>
            </p>
          </CardContent>
        </Card>
      </div>
      <p className="text-xs text-slate-400 text-center mt-4">
        Stay still for the most accurate reading.
      </p>
    </div>
  );
}
