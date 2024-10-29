import { create } from "zustand";

export const useStore = create((set, get) => ({
  cameraPosition: [2, 1, 2],
  setCameraPosition: (newPos) => set((state) => ({ cameraPosition: newPos })),
  isDebug: false,
  setDebug: (value) => set((state) => ({ isDebug: value })),
}));
