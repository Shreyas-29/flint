import { create } from "zustand";

interface FormatModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useFormatModal = create<FormatModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useFormatModal;
