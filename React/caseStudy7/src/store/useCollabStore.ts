import { create } from 'zustand';

interface Collaborator {
  id: string;
  name: string;
}

interface CollabState {
  collaborators: Collaborator[];
  setCollaborators: (list: Collaborator[]) => void;
}

export const useCollabStore = create<CollabState>((set) => ({
  collaborators: [],
  setCollaborators: (list) => set({ collaborators: list }),
}));