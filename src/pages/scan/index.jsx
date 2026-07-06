import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { IntakeStep } from "./components/IntakeStep";
import { ScanningStep } from "./components/ScanningStep";
// import { StepIndicator } from "./components/StepIndicator";

export default function Scan() {
  const navigate = useNavigate();
  const [step, setStep] = useState("intake");

  // const stepMap = { intake: 1, scanning: 2 };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-16 w-full">
        <div className="flex items-start gap-4">
          {(step === "intake" || step === "scanning") && (
            <div className="flex-shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                aria-label="Back to home"
              >
                <ArrowLeft className="size-5" />
              </Button>
            </div>
          )}

          <div className="flex-1">
            {/* <StepIndicator current={stepMap[step]} /> */}

            {step === "intake" && (
              <IntakeStep onStart={() => setStep("scanning")} />
            )}
            {step === "scanning" && (
              <ScanningStep
                onComplete={(r) => {
                  navigate("/result", { state: { scanResult: r } });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
