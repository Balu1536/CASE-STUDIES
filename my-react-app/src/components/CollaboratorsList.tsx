import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';
import { fetchCollaboratorsFromAPI } from '../api/fetchCollaborators';

// 1. Define the Zustand Store
interface CollabState {
  collaborators: { id: string; name: string }[];
  setCollaborators: (list: { id: string; name: string }[]) => void;
}

const useCollabStore = create<CollabState>((set) => ({
  collaborators: [],
  setCollaborators: (list) => set({ collaborators: list }),
}));

// 2. The Component
export const CollaboratorsList = () => {
  const { collaborators, setCollaborators } = useCollabStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['collaborators'],
    queryFn: fetchCollaboratorsFromAPI,
  });

  // 3. Sync React Query data to Zustand whenever 'data' changes
  useEffect(() => {
    if (data) {
      setCollaborators(data);
    }
  }, [data, setCollaborators]);

  if (isLoading) return <p>Fetching teammates...</p>;
  if (isError) return <p>Failed to sync collaborators.</p>;

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="font-bold mb-2">Active Collaborators ({collaborators.length})</h3>
      <ul className="space-y-1">
        {collaborators.map((c) => (
          <li key={c.id} className="text-blue-600">
            ● {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};