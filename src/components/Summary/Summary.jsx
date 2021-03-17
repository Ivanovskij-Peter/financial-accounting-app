import React from "react";
import styles from "../Summary/Summary.module.scss";

const Summary = ({date, amount}) => {
  return (
    <div className={styles.summary}>
      <p className={styles.summary_title}>Сводка</p>
      <ul className={styles.summary_list}>
        <li className={styles.summary_listItem}>
          <span className={styles.summary_itemMonth}>{date}</span>
          <span className={styles.summary_itemSum}>{amount}</span>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
