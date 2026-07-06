import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Lightbulb } from "lucide-react";

const RECOMMENDATIONS = [
  "Drink enough water to stay hydrated",
  "Rest for 10 to 15 minutes after activity",
  "Continue monitoring if symptoms persist",
  "Your condition looks good, keep it up",
];

export function RecommendationsCard({ checked, onToggle }) {
  return (
    <Card className="w-full flex flex-col gap-3 p-4 shadow-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="w-8 h-8 rounded-xl bg-blue-100 items-center justify-center flex">
          <Lightbulb className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-lg font-semibold">Recommendations</span>
      </div>

      <div className="flex flex-col gap-4 items-start">
        {RECOMMENDATIONS.map((rec, i) => (
          <div
            key={i}
            className="flex flex-row gap-3 items-center w-full"
          >
            <Checkbox
              checked={checked[i]}
              onCheckedChange={() => onToggle(i)}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-500">{rec}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
