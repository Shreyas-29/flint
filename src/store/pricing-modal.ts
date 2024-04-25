import { create } from "zustand";

interface PricingModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const usePricingModal = create<PricingModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));

export default usePricingModal;
