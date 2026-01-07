import { NotificationsPanel } from './store/slices/NotificationPanel';
import { useDesignHubStore } from './store/DesignHubStore';

export default function App() {
  const addNotification = useDesignHubStore(
    (s) => s.addNotification
  );

  return (
    <div>
      <h1>DesignHub</h1>

      <button
        onClick={() =>
          addNotification({
            id: Date.now().toString(),
            message: 'New comment added',
            read: false,
          })
        }
      >
        Add Notification
      </button>

      <NotificationsPanel />
    </div>
  );
}
