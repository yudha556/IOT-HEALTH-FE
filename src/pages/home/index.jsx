import { Button } from "@/components/ui/button";
import { Brain, ScanHeart, ShieldCheck, ZapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundBlur from "@/components/layout/BackgroundBlur";

export default function Home() {
  return (
    <>
      <BackgroundBlur />

      <div className="flex flex-col gap-8 items-center justify-center z-10  h-full py-14 relative">
      <div className=" px-4 py-2 items-center justify-center flex flex-row gap-2 bg-white shadow-md rounded-full shadow-blue-200 border-gray-200">
        <div className="w-2 h-2 rounded-full bg-green-600" />
        <p className="text-sm text-blue-600">AI-Powered · Real-Time · IoT Connected</p>
      </div>
      <h1 className="text-6xl font-bold">
        MONITOR YOUR HEALTH <br />
        <span className="text-blue-500 ">With AI</span>
      </h1>

      <h2 className="text-lg text-muted-foreground">
        Real-time health monitoring powered by IoT and Artificial Intelligence.
      </h2>

      <div className="flex flex-row gap-2 items-center">
        <Link to="/scan">
          <Button
            variant="default"
            size="lg"
            className="w-40 py-6 rounded-[20px] text-xl font-semibold gap-3 cursor-pointer hover:translate-y-1 transition-transform duration-300 ease-in-out shadow-md"
          >
            <ScanHeart/>
            Start Scan
          </Button>
        </Link>
      </div>


      <div className="flex flex-row justify-center gap-12 items-center w-full">
        <div className="flex flex-row gap-2 items-center">
            <ShieldCheck className="text-green-500 w-5 h-5" />
            <p className="text-gray-500 text-sm">HIPAA Compliant</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <ZapIcon className="text-yellow-600 w-5 h-5" />
            <p className="text-gray-500 text-sm">Real-Time Results</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <Brain className="text-indigo-500 w-5 h-5" />
            <p className="text-gray-500 text-sm">AI Interpretation</p>
        </div>
      </div>
      {/* <div className="absolute border-2 h-130 w-130 rounded-full bg-blue-500 -z-10 top-0 opacity-30 blur" /> */}
      </div>
    </>
  );
}
