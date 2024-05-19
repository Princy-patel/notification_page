import React from "react";
import classes from "./notification-details.module.css";

function NotificationDetails({ details }) {
  return (
    <div className={details && classes.notification_details}>{details}</div>
  );
}

export default NotificationDetails;
