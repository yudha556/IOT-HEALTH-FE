import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function RescanButton() {
  const navigate = useNavigate();

  return (
    <Card className="w-full flex flex-col gap-3 p-4 mt-6 shadow-md">
      <Button
        variant="outline"
        className="w-full flex flex-row gap-2 items-center justify-center"
        onClick={() => navigate("/scan")}
      >
        <ArrowLeft className="w-4 h-4" />
        Rescan
      </Button>
    </Card>
  );
}
