import { create } from "zustand";

export const useModal = create((set) => ({
  type: null,
  isOpen: false,
  data: {},
  apiUrl: "",
  query: "",
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
