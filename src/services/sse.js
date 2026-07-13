export const connectSSE = (deviceCode) => {
  return new EventSource(
    `${import.meta.env.VITE_API_URL}/iot/events/${deviceCode}`
  );
};

export const disconnectSSE = (eventSource) => {
  if (eventSource) {
    eventSource.close();
  }
};