import useNotificationStore from "../store/notificationStore";

const NotificationList = () => {
  const notifications = useNotificationStore(
    (state) => state.notifications
  );

  const markAsRead = useNotificationStore(
    (state) => state.markAsRead
  );

  const clearNotifications = useNotificationStore(
    (state) => state.clearNotifications
  );

  //  filter OUTSIDE selector
  const unreadNotifications = notifications.filter(
    (n) => !n.read
  );

  return (
    <div>
      <h3>Unread Notifications</h3>

      {unreadNotifications.length === 0 && (
        <p>No unread notifications</p>
      )}

      {unreadNotifications.map((n) => (
        <div key={n.id}>
          <strong>[{n.type}]</strong> {n.message}
          <button onClick={() => markAsRead(n.id)}>
            Mark as read
          </button>
        </div>
      ))}

      <br />
      <button onClick={clearNotifications}>
        Clear All
      </button>
    </div>
  );
};

export default NotificationList;
