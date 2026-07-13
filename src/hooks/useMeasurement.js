import {
  startMeasurement,
  endMeasurement,
  analyzeMeasurement,
  getMeasurementDetail,
  chatMeasurement,
} from "../api/measurement";

import { useScanStore } from "../stores/scan.store";

export const useMeasurement = () => {
  const setSession = useScanStore((s) => s.setSession);
  const setLock = useScanStore((s) => s.setLock);

  const start = async (payload) => {
    const result = await startMeasurement(payload);

    setSession(result.data.session);
    setLock(result.data.lock);

    return result;
  };

  const end = async () => {
    const session = useScanStore.getState().session;

    if (!session) return;

    return endMeasurement(session.id);
  };

  const analyze = async () => {
    const session = useScanStore.getState().session;

    if (!session) return;

    return analyzeMeasurement(session.id);
  };

  const detail = async () => {
    const session = useScanStore.getState().session;

    if (!session) return;

    return getMeasurementDetail(session.id);
  };

  const chat = async (payload) => {
    const session = useScanStore.getState().session;

    if (!session) return;

    return chatMeasurement(session.id, payload);
  };

  return {
    start,
    end,
    analyze,
    detail,
    chat,
  };
};