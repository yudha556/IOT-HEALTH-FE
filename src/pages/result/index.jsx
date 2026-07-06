import { useState } from "react";
import { useLocation } from "react-router-dom";
import { VitalsCard } from "./components/interpretation/VitalsCard";
import { AIAnalysisCard } from "./components/interpretation/AIAnalysisCard";
import { RecommendationsCard } from "./components/interpretation/RecommendationsCard";
import { ChatPanel } from "./components/chat/ChatPanel";

const RECOMMENDATIONS = [
  "Drink enough water to stay hydrated",
  "Rest for 10 to 15 minutes after activity",
  "Continue monitoring if symptoms persist",
  "Your condition looks good, keep it up",
];

export default function Result() {
  const location = useLocation();
  const scanResult = location.state?.scanResult || { hr: 102, spo2: 98 };
  const [checked, setChecked] = useState(() => RECOMMENDATIONS.map(() => false));

  const toggleRecommendation = (i) =>
    setChecked((c) => c.map((v, idx) => (idx === i ? !v : v)));

  return (
    <div className="h-[700px] w-full overflow-hidden p-8 flex flex-col gap-4 text-slate-900 dark:bg-slate-950 dark:text-white">

      <div className="flex flex-row w-full gap-4 flex-1 min-h-0">
        <div className="w-full h-full flex flex-col gap-4 overflow-hidden">
      <div className="w-full flex items-center justify-center shrink-0">
        <VitalsCard scanResult={scanResult} />
      </div>
          <AIAnalysisCard scanResult={scanResult} />
          <RecommendationsCard
            recommendations={RECOMMENDATIONS}
            checked={checked}
            onToggle={toggleRecommendation}
          />
        </div>

        <div className="w-full h-full overflow-hidden">
          <ChatPanel bpm={scanResult.hr} spo2={scanResult.spo2} />
        </div>
      </div>
    </div>
  );
}