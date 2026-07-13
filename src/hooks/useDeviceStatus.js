import { useEffect } from "react";
import { getDeviceStatus } from "../api/iot";
import { useScanStore } from "../stores/scan.store";

export const useDeviceStatus = () => {
  const deviceCode = useScanStore((s) => s.deviceCode);

  const setDevice = useScanStore((s) => s.setDevice);
  const setLoading = useScanStore((s) => s.setLoading);
  const setError = useScanStore((s) => s.setError);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);

        const device = await getDeviceStatus(deviceCode);

        setDevice(device);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [deviceCode]);

  return useScanStore();
};