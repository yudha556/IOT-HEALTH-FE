import { api } from "./axios";

export const getDeviceStatus = async (deviceCode) => {
  const { data } = await api.get(
    `/iot/devices/${deviceCode}/status`
  );

  return data;
};