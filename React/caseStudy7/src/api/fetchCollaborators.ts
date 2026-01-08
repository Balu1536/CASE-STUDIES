export const fetchCollaboratorsFromAPI = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: '1', name: 'Alice (Lead)' },
    { id: '2', name: 'Bob (Editor)' },
    { id: '3', name: 'Charlie (Viewer)' },
  ];
};