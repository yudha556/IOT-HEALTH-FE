import { create } from "zustand";

export const useScanStore = create((set) => ({
  // Device
  deviceCode: "esp32-001",
  device: null,

  // Session
  session: null,
  lock: null,

  // Realtime
  heartRate: 0,
  spo2: 0,

  // AI
  analysis: null,

  chatHistory: [],

  loading: false,
  error: null,

  // Actions

  setDevice: (device) => set({ device }),

  setSession: (session) => set({ session }),

  setLock: (lock) => set({ lock }),

  setVitals: (heartRate, spo2) =>
    set({
      heartRate,
      spo2,
    }),

  setAnalysis: (analysis) =>
    set({
      analysis,
    }),

  addChat: (message) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, message],
    })),

  setLoading: (loading) =>
    set({
      loading,
    }),

  setError: (error) =>
    set({
      error,
    }),

  resetScan: () =>
    set({
      session: null,
      lock: null,
      heartRate: 0,
      spo2: 0,
      analysis: null,
      chatHistory: [],
      loading: false,
      error: null,
    }),
}));