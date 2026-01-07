import React from 'react';
import { useDesignHubStore } from '../DesignHubStore';
import { NotificationsSlice } from './NotificationsSlice';
export function NotificationsPanel() {
  const notifications = useDesignHubStore(
    (s) => s.notifications
  );
  const markAsRead = useDesignHubStore(
    (s) => s.markAsRead
  );
  const clearNotifications = useDesignHubStore(
    (s) => s.clearNotifications
  );

  const unreadNotifications = notifications.filter(
    (n) => !n.read
  );

  if (unreadNotifications.length === 0) {
    return <p>No unread notifications 🎉</p>;
  }

  return (
    <div>
      <h3>Unread Notifications</h3>
        {unreadNotifications.length === 0 ? (
        <p>No unread notifications 🎉</p>
      ) : (
        <ul>
          {unreadNotifications.map((n) => (
            <li key={n.id}>
              {n.message}
              <button
                onClick={() => markAsRead(n.id)}
                style={{ marginLeft: '8px' }}
              >
                Mark as read
              </button>
            </li>
          ))}
        </ul>
      )}

      {notifications.length > 0 && (
        <button onClick={clearNotifications}>
          Clear All
        </button>
      )}
    </div>
  );
}