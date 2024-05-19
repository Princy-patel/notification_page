import { useState } from "react";
import NotificationData from "./notification-data";
import classes from "./notification.module.css";
import notificationData from "../../data";

function Notification() {
  const [notificationInfo, setNotificationInfo] = useState(notificationData);

  const handleNotification = function () {
    let updateNotification = notificationInfo.map((notification) => ({
      ...notification,
      isRead: !notification.isRead,
    }));
    setNotificationInfo(updateNotification);
  };

  return (
    <div className={classes.notification}>
      <div className={classes.notification_header}>
        <h1>
          Notification{" "}
          <strong>
            {notificationInfo.filter((data) => data.isRead).length}
          </strong>
        </h1>
        <p onClick={handleNotification}>Mark all as read</p>
      </div>
      <NotificationData data={notificationInfo} />
    </div>
  );
}

export default Notification;
