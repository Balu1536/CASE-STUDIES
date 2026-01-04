import { useState } from "react";
import NotificationList from "./components/NotificationList";
import useNotificationStore from "./store/notificationStore";
import type { NotificationType } from "./store/notificationStore";

function App() {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("info");

  const addNotification = useNotificationStore(
    (state) => state.addNotification
  );

  const handleAdd = () => {
    if (!message.trim()) return;
    addNotification(message, type);
    setMessage(""); // clear input
  };

  return (
    <div>
      <h2>Notification Challenge</h2>

      {/* Input for message */}
      <input
        type="text"
        placeholder="Enter notification message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      {/* Select notification type */}
      <select
        value={type}
        onChange={(e) =>
          setType(e.target.value as NotificationType)
        }
      >
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>

      <button onClick={handleAdd}>
        Add Notification
      </button>

      <hr />

      <NotificationList />
    </div>
  );
}

export default App;
