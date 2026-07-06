import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplet, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function SimpleScanResultsStep({ result, onRescan, onViewDetail }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Scan Complete</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Your health metrics have been recorded.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Heart className="size-3.5" /> Heart rate
              </span>
              <Badge className="bg-blue-50 text-blue-800 hover:bg-blue-50 dark:bg-blue-950 dark:text-blue-300">
                Normal
              </Badge>
            </div>
            <p className="font-mono text-2xl font-semibold">
              {result.hr} <span className="text-xs text-slate-400 font-normal">bpm</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Droplet className="size-3.5" /> Blood oxygen
              </span>
              <Badge className="bg-blue-50 text-blue-800 hover:bg-blue-50 dark:bg-blue-950 dark:text-blue-300">
                Healthy
              </Badge>
            </div>
            <p className="font-mono text-2xl font-semibold">
              {result.spo2} <span className="text-xs text-slate-400 font-normal">SpO2%</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-6" />

      <div className="mb-6">
        <p className="text-sm font-semibold mb-3 flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <Sparkles className="size-4 text-blue-600 dark:text-blue-400" /> AI Analysis
        </p>
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-4">
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-3">
              Your heart rate of <strong>{result.hr} bpm</strong> is within normal range, showing good cardiovascular response. Blood oxygen saturation at <strong>{result.spo2}%</strong> is excellent and indicates healthy lung function.
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              No concerning patterns detected in this scan. Continue monitoring regularly for best results.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onRescan}
          variant="outline"
          className="flex-1 h-11 gap-2"
        >
          <RefreshCw className="size-4" />
          Scan again
        </Button>
        {onViewDetail && (
          <Button onClick={onViewDetail} className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
        )}
      </div>
    </div>
  );
}
