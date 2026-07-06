import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScanLine, Minus, Plus } from "lucide-react";
import { ACTIVITIES, STRESS_LEVELS } from "./constants";

export function IntakeStep({ onStart }) {
  const [activity, setActivity] = useState("exercising");
  const [stress, setStress] = useState(1); // index-based: 0-4
  const [sleepHours, setSleepHours] = useState(7);
  const [notes, setNotes] = useState("");

  return (
    <div>
        <h1 className="text-2xl font-semibold mb-1">Before we scan</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Help our AI understand your current state for more accurate results.
        </p>

        {/* Activity Selection */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 block">
            Current activity
          </Label>
          <ToggleGroup type="single" value={activity} onValueChange={setActivity}>
            {ACTIVITIES.map(({ value, label, icon: Icon }) => (
              <ToggleGroupItem
                key={value}
                value={value}
                aria-label={label}
                className="flex items-center gap-1.5 bg-white dark:bg-slate-950 data-[state=on]:bg-blue-50 dark:data-[state=on]:bg-blue-950 data-[state=on]:text-blue-800 dark:data-[state=on]:text-blue-300"
              >
                <Icon className="size-4" />
                <span className="text-xs">{label}</span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Stress Level Selection - Full Width Icon Buttons */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 block">
            Stress level
          </Label>
          <div className="flex gap-2 w-full">
            {STRESS_LEVELS.map(({ icon: Icon }, idx) => (
              <button
                key={idx}
                onClick={() => setStress(idx)}
                className={`flex-1 flex items-center justify-center py-3 rounded-lg border transition-colors ${
                  stress === idx
                    ? "border-blue-600 bg-blue-50 text-blue-800 dark:border-blue-500 dark:bg-blue-950 dark:text-blue-300"
                    : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                <Icon className="size-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Sleep Duration - Input with +/- */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3 block">
            Sleep duration
          </Label>
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setSleepHours((h) => Math.max(0, h - 0.5))}
            >
              <Minus className="size-4" />
            </Button>
            <input
              type="number"
              min="0"
              max="14"
              step="0.5"
              value={sleepHours}
              onChange={(e) => setSleepHours(parseFloat(e.target.value) || 0)}
              className="w-20 px-3 py-2 text-center font-mono text-sm border rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
            />
            <span className="text-sm text-slate-500 dark:text-slate-400">hours</span>
            <Button
              size="icon"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setSleepHours((h) => Math.min(14, h + 0.5))}
            >
              <Plus className="size-4" />
            </Button>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-2 block">
            Notes <span className="font-normal text-slate-400">optional</span>
          </Label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. I had a headache earlier today..."
            className="resize-none"
          />
        </div>

        <Button
          onClick={() => onStart({ activity, stress, sleepHours, notes })}
          className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white gap-2"
        >
          <ScanLine className="size-4" />
          Start scanning
        </Button>
    </div>
  );
}
