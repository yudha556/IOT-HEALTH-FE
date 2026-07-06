import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Droplet,
  Sparkles,
  ListChecks,
  ArrowLeft,
  Download,
} from "lucide-react";

const RECOMMENDATIONS = [
  "Drink enough water to stay hydrated",
  "Rest for 10 to 15 minutes after activity",
  "Continue monitoring if symptoms persist",
  "Your condition looks good, keep it up",
];

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const scanResult = location.state?.scanResult || { hr: 102, spo2: 98 };
  const [checked, setChecked] = useState(() => RECOMMENDATIONS.map(() => false));

  const toggle = (i) =>
    setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-12 w-full">
        <Button
          variant="ghost"
          className="mb-6 gap-2 text-slate-600 hover:text-slate-900"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="size-4" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-2">Today's Health Results</h1>
        <p className="text-lg text-slate-500 mb-8">
          Complete AI analysis and personalized recommendations
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500 flex items-center gap-2">
                  <Heart className="size-4" /> Heart Rate
                </span>
                <Badge className="bg-blue-50 text-blue-800 hover:bg-blue-50 dark:bg-blue-950 dark:text-blue-300">
                  Normal
                </Badge>
              </div>
              <p className="font-mono text-3xl font-semibold">
                {scanResult.hr}
                <span className="text-sm text-slate-400 font-normal"> bpm</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500 flex items-center gap-2">
                  <Droplet className="size-4" /> Blood Oxygen
                </span>
                <Badge className="bg-blue-50 text-blue-800 hover:bg-blue-50 dark:bg-blue-950 dark:text-blue-300">
                  Excellent
                </Badge>
              </div>
              <p className="font-mono text-3xl font-semibold">
                {scanResult.spo2}
                <span className="text-sm text-slate-400 font-normal"> %</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <p className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Sparkles className="size-5" /> AI Interpretation
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              Your heart rate of <strong>{scanResult.hr} bpm</strong> is slightly elevated, which is completely normal after recent activity. This indicates good cardiovascular response to exertion.
            </p>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
              Blood oxygen saturation at <strong>{scanResult.spo2}%</strong> is excellent and within healthy ranges. This demonstrates good lung function and oxygen delivery to your body. No immediate concerns were detected in this scan.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ListChecks className="size-5 text-blue-600" /> Recommendations
            </p>
            <div className="flex flex-col gap-3">
              {RECOMMENDATIONS.map((text, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  <Checkbox checked={checked[i]} onCheckedChange={() => toggle(i)} />
                  <span
                    className={`text-sm ${
                      checked[i] ? "line-through text-slate-400" : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {text}
                  </span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 gap-2 h-11">
            <Download className="size-4" />
            Download report
          </Button>
          <Button className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white">
            Schedule checkup
          </Button>
        </div>
      </div>
    </div>
  );
}
