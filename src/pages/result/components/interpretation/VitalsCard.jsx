import { Card } from "@/components/ui/card";
import { Heart, Droplet, Check } from "lucide-react";

export function VitalsCard({ scanResult }) {
  return (
    <div className="flex flex-row gap-4 items-center w-full">
      <Card className="w-full flex flex-col gap-3 p-4 shadow-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm font-semibold">Heart Rate</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-500">
              Selesai
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span className="text-3xl font-semibold">{scanResult.hr}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            bpm
          </span>
        </div>

        <p className="text-sm text-gray-500 text-start">Rentang normal: 60 - 100 bpm</p>
      </Card>
      <Card className="w-full flex flex-col gap-3 p-4 shadow-md">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3 items-center">
            <Droplet className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold">Oxygen Saturation</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-500">
              Selesai
            </span>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span className="text-3xl font-semibold">{scanResult.spo2}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            SpO2 %
          </span>
        </div>

        <p className="text-sm text-gray-500 text-start">Rentang normal: 95 - 100 %</p>
      </Card>
    </div>
  );
}
