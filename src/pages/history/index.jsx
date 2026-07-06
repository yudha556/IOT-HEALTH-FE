import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Activity,
  Heart,
  Droplet,
  Tag,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const STATUS_STYLES = {
  Normal: "bg-emerald-50 text-emerald-700 hover:bg-emerald-50",
  Excellent: "bg-blue-50 text-blue-700 hover:bg-blue-50",
  Good: "bg-emerald-50 text-emerald-700 hover:bg-emerald-50",
  Watch: "bg-amber-50 text-amber-700 hover:bg-amber-50",
};

const SCANS = [
  {
    id: 1,
    date: "Today, 9:14 AM",
    bpm: 102,
    spo2: 98,
    tag: "Exercising",
    status: "Normal",
    summary:
      "Slightly elevated HR post-exercise. Blood oxygen excellent at 98%. All vitals within healthy range. No concerns detected.",
    highlights: ["Slightly elevated HR", "98%", "healthy range", "No concerns"],
  },
  {
    id: 2,
    date: "Yesterday, 8:02 AM",
    bpm: 78,
    spo2: 99,
    tag: "Just Woke Up",
    status: "Excellent",
    summary:
      "Resting heart rate is well within a healthy range right after waking up. Blood oxygen at 99% indicates excellent respiratory function.",
    highlights: ["Resting heart rate", "99%", "excellent respiratory function"],
  },
  {
    id: 3,
    date: "Mon, Nov 18, 7:45 AM",
    bpm: 91,
    spo2: 97,
    tag: "Working",
    status: "Good",
    summary:
      "Heart rate is slightly higher than resting baseline, consistent with a focused work session. SpO2 remains stable at 97%.",
    highlights: ["slightly higher", "97%"],
  },
  {
    id: 4,
    date: "Sun, Nov 17, 9:30 AM",
    bpm: 115,
    spo2: 96,
    tag: "Exercising",
    status: "Watch",
    summary:
      "Heart rate reached 115 BPM during exercise, higher than usual for this activity. Consider monitoring intensity and recovery time.",
    highlights: ["115 BPM", "monitoring intensity"],
  },
];

function renderSummary(text, highlights) {
  if (!highlights?.length) return text;
  const pattern = new RegExp(`(${highlights.join("|")})`, "g");
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="font-medium text-blue-600">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ScanCard({ scan, isOpen, onToggle }) {
  return (
    <Card className="rounded-2xl border-slate-100 shadow-sm overflow-hidden shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
              <Activity className="h-5 w-5 text-slate-400" />
            </div>
            <div className="min-w-0 flex flex-col gap-1 items-start">
              <p className="font-semibold text-slate-900 truncate">
                {scan.date}
              </p>
              <div className=" flex flex-wrap items-center gap-x-6 text-sm">
                <span className="flex items-center gap-1 text-blue-600 font-medium">
                  <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />
                  {scan.bpm} BPM
                </span>
                <span className="flex items-center gap-1 text-blue-600 font-medium">
                  <Droplet className="h-3.5 w-3.5 text-blue-500 fill-blue-500" />
                  {scan.spo2}% SpO₂
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Tag className="h-3.5 w-3.5" />
                  {scan.tag}
                </span>
              </div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Badge
              variant="secondary"
              className={`rounded-full border-0 px-3 font-medium ${STATUS_STYLES[scan.status]}`}
            >
              {scan.status}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-slate-400 hover:text-slate-600"
              onClick={onToggle}
              aria-label={isOpen ? "Collapse summary" : "Expand summary"}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-gray-200 px-4 py-4">
              <div className="flex gap-3 items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50">
                  <Sparkles className="h-4 w-4 text-indigo-500" />
                </div>
                <div className="flex flex-col gap-1 items-start">
                  <p className="text-xs font-medium text-indigo-500">
                    AI Summary
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {renderSummary(scan.summary, scan.highlights)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function History() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="h-[700px] w-full flex flex-col bg-slate-50 py-10 px-4 sm:px-8 overflow-hidden">
      <div className="w-full shrink-0">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold text-slate-900">
              Scan History
            </h1>
            <p className="mt-1 text-slate-500">
              Your recent health monitoring sessions.
            </p>
          </div>
          {/* <Button
            variant="link"
            className="h-auto p-0 text-blue-600 font-medium"
          >
            View all scans
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button> */}
        </div>
      </div>

      <ScrollArea className="flex-1 w-full pr-4 min-h-0">
        <div className="flex flex-col gap-4 pb-4">
          {SCANS.map((scan) => (
            <ScanCard
              key={scan.id}
              scan={scan}
              isOpen={openId === scan.id}
              onToggle={() => toggle(scan.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}