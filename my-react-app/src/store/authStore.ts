import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// 1. Define the interface
interface UserSession {
  userId: string | null;
  token: string | null;
  expiresAt: number | null;
  role: 'admin' | 'user'; // Field added in Version 2
  login: (userId: string, token: string, expiresAt: number) => void;
  logout: () => void;
}

// 2. Create the store with persistence
export const useAuthStore = create<UserSession>()(
  persist(
    (set) => ({
      userId: null,
      token: null,
      expiresAt: null,
      role: 'user',
      login: (userId, token, expiresAt) => 
        set({ userId, token, expiresAt }),
      logout: () => 
        set({ userId: null, token: null, expiresAt: null, role: 'user' }),
    }),
    {
      name: 'user-session-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
      
      // ONLY persist userId and token (expiresAt is ignored)
      partialize: (state) => ({ 
        userId: state.userId, 
        token: state.token ,
        role: state.role
      }),

      version: 2, // Current schema version
      migrate: (persistedState: any, version: number) => {
        if (version < 2) {
          // If the user has old v1 data, we "migrate" them by adding the role field
          return { ...persistedState, role: 'user' };
        }
        return persistedState as UserSession;
      },
    }
  )
);