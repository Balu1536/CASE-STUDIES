import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Defining the interface tells TypeScript this is a module
export interface PreferencesState {
  theme: 'light' | 'dark';
  fontSize: number;
  setTheme: (theme: 'light' | 'dark') => void;
  setFontSize: (size: number) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      theme: 'light',
      fontSize: 14,
      setTheme: (theme) => set({ theme }),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'collabnotes-preferences',
    }
  )
);