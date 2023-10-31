import { create } from "zustand";
import { Subscription } from "@/types/Subsctiption";

export type LanguagesSupported =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "el"
  | "ja"
  | "la"
  | "ru"
  | "zh"
  | "ar";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  fr: "French",
  es: "Spanish",
  el: "Greek",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Mandarin",
  ar: "Arabic",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (Subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
