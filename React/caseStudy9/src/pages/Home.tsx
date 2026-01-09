import { useState, Suspense, lazy } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Lazy component
const ProfileSettings = lazy(() => import('./ProfileSettings'));

export default function Home() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div>
      <h1>EduStream</h1>

      <button onClick={() => setShowSettings(true)}>
        Settings
      </button>

      {showSettings && (
        <Suspense fallback={<LoadingSpinner />}>
          <ProfileSettings />
        </Suspense>
      )}
    </div>
  );
}
