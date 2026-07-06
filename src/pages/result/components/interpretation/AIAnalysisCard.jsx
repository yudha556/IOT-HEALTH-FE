import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AIAnalysisCard() {
  return (
    <Card className="w-full flex flex-col gap-3 p-4 shadow-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="w-8 h-8 rounded-xl bg-blue-100 items-center justify-center flex">
          <Sparkles className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-lg font-semibold">AI Analysis</span>
      </div>

      <p className="text-sm text-gray-500 text-start">
        Detak jantung dan kadar oksigen kamu masih berada dalam rentang normal untuk kondisi istirahat. BPM sedikit di atas rata-rata bisa dipengaruhi aktivitas fisik ringan atau kondisi sebelum pengukuran, sementara SpO₂ 99% menunjukkan sirkulasi oksigen yang baik.
      </p>
    </Card>
  );
}
