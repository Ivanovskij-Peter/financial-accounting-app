import React from "react";
import styles from "./BackHome.module.scss";
import sprite from "../../images/sprite.svg";

function BackHome() {
  return (
    <p className={styles.return}>
      <Link to="/" className={styles.link}>
        <svg width="20px" height="20" className={styles.icon}>
          <use href={sprite + "#back-arrow"} />
        </svg>
        <span className={styles.text}>Вернуться на главную</span>
      </Link>
    </p>
  );
}

export default BackHome;
