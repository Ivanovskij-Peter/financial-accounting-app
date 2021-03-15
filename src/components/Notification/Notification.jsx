import React from "react";
import styles from "../Notification/notification.module.scss";

const Notification = () => {
  return (
    <div className={styles.notificationWrapper}>
      <div className={styles.notification}>
        <div className={styles.triangleUp}></div>
        <p className={styles.notificationTextF}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={styles.notificationTextS}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </div>
  );
};

export default Notification;
