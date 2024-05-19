import classes from "./notification-data.module.css";
import NotificationDetails from "./notification-details";

function NotificationData({ data }) {
  return (
    <>
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className={`${classes.main_data} ${
              data.isRead === true && classes.mark_as_read
            }`}
          >
            <div>
              <img src={data.image} className={classes.profile_img} />
            </div>
            <div className={classes.info}>
              <p>
                <strong>{data.name}</strong> {data.info}{" "}
                <strong>{data.notification}</strong>
              </p>
              <p>{data.time}</p>
              <NotificationDetails details={data.details ?? null} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NotificationData;
