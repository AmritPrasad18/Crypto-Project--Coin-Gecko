import { create } from "zustand";

const store = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set((state) => ({
         ...state, //rest operator or spread operator
         currency: newCurrency
    })),
}));

export default store;