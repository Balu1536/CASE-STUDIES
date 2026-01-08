// import { NotificationsPanel } from './store/slices/NotificationPanel';
// import { useDesignHubStore } from './store/DesignHubStore';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CollaboratorsList } from './components/CollaboratorsList';
import { PreferencesPanel } from './components/PreferencesPanel';
import { usePreferencesStore } from './store/preferencesStore';
import { useAuthStore } from './store/authStore';
import { HistoryPanel } from './components/HistoryPanel';
import { useHistoryStore } from './store/useHistory';
// 1. Initialize the Query Client (Outside the component to prevent re-renders)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  // Accessing state for the UI
  const { theme, fontSize } = usePreferencesStore();
  const { userId,expiresAt, role, login, logout } = useAuthStore();
  const addHistoryEntry = useHistoryStore((s) => s.addHistoryEntry);
  const handleLogin = () => {
    // Set expiry for 1 hour from now
    const oneHour = Date.now() + 3600000;
    login('user_001', 'abc-123', oneHour);
    addHistoryEntry('user_001', 'login');
  };
  const handleLogout = () => {
  if (userId) {
    addHistoryEntry(userId, 'logout'); // Log it before clearing the state
  }
  logout();
};
  return (
    <>
    <nav>
  <div>
    <section>
      {userId ? (
        <>
          <p>Logged in as: <strong>{userId}</strong></p>
          {/* Use the variable 'expiresAt', NOT the function 'handleLogin()' */}
          <p>Session Expires At: {expiresAt ? new Date(expiresAt).toLocaleTimeString() : 'N/A'}</p>
          <button onClick={logout}>Logout</button>
          <p style={{ fontSize: '0.8rem', color: 'gray' }}>
            Try refreshing: ID will stay, but Expiry will disappear!
          </p>
        </>
      ) : (
        <button onClick={handleLogin}>Login to Test</button>
      )}
    </section>
  </div>
</nav>
      
    
    <HistoryPanel/>
    <QueryClientProvider client={queryClient}>
      <div 
        style={{ 
          backgroundColor: theme === 'dark' ? '#333' : '#fff', 
          color: theme === 'dark' ? '#fff' : '#000',
          fontSize: `${fontSize}px`,
          minHeight: '100vh',
          padding: '20px'
        }}
      >
        
        <header>
          <h1>Collaborative Notes</h1>
        </header>

        <main style={{ display: 'flex', gap: '20px' }}>
          <section style={{ flex: 2 }}>
            <h2>Notes Workspace</h2>
            <p>Ready to collaborate!</p>
            {/* Component we fixed earlier */}
            <CollaboratorsList />
          </section>
          
          <aside >
            <h2>Settings</h2>
            <PreferencesPanel />
          </aside>
        </main>
      </div>
    </QueryClientProvider>
    </>
  
  );
};

export default App;