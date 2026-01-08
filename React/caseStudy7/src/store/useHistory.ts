import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface HistoryState {
  history: HistoryEntry[];
    addHistoryEntry: (noteId: string, action: string) => void;
    clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  devtools(
    immer((set) => ({
      history: [],
      addHistoryEntry: (noteId, action) => // Accepting two arguments here
      set((state) => {
        state.history.unshift({ noteId, action, timestamp: Date.now() });
      }),
      clearHistory: () =>
        set((state) => {
          state.history = [];
        }),
    })),
    { name: 'HistoryStore' }
  )
);