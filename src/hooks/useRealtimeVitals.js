import { useEffect } from "react";
import { connectSSE } from "../services/sse";
import { useScanStore } from "../stores/scan.store";

export const useRealtimeVitals = () => {
  const deviceCode = useScanStore((s) => s.deviceCode);
  const setVitals = useScanStore((s) => s.setVitals);

  useEffect(() => {
    const eventSource = connectSSE(deviceCode);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setVitals(data.bpm ?? 0, data.spo2 ?? 0);
    };

    eventSource.onerror = () => {
      console.error("SSE disconnected");
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [deviceCode]);
};