import { api } from "./axios";

export const startMeasurement = async (payload) => {
  const { data } = await api.post(
    "/measurement-sessions/start",
    payload
  );

  return data;
};

export const endMeasurement = async (sessionId) => {
  const { data } = await api.patch(
    `/measurement-sessions/${sessionId}/end`
  );

  return data;
};

export const analyzeMeasurement = async (sessionId) => {
  const { data } = await api.post(
    `/measurement-sessions/${sessionId}/analyze`
  );

  return data;
};

export const getMeasurementDetail = async (sessionId) => {
  const { data } = await api.get(
    `/measurement-sessions/${sessionId}`
  );

  return data;
};

export const chatMeasurement = async (sessionId, payload) => {
  const { data } = await api.post(
    `/measurement-sessions/${sessionId}/chat`,
    payload
  );

  return data;
};