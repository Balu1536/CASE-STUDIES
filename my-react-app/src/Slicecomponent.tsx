import { useDesignHubStore } from "./store/DesignHubStore";

function UserProfile() {
  const user = useDesignHubStore((s) => s.user);
  const setUser = useDesignHubStore((s) => s.setUser);

  if (!user) return <button onClick={() => setUser({ id: 'u1', name: 'Alex' })}>Login</button>;
  return <div>Welcome, {user.name}</div>;
}

function FileList() {
  const files = useDesignHubStore((s) => s.files);
  const addFile = useDesignHubStore((s) => s.addFile);

  return (
    <div>
      <button onClick={() => addFile({ id: Date.now().toString(), name: 'New', content: '' })}>
        Add File
      </button>
      <ul>
        {files.map((f) => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}