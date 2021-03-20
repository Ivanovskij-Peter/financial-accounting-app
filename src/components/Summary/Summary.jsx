import React from "react";
import { useSelector } from "react-redux";
import getDataInfo from "../../redux/transaction/transaction-selectors";
import styles from "./Summary.module.scss";

const Summary = () => {
  const incomes = useSelector(getDataInfo.getData);

  return (
    <>
      <div className={styles.summary}>
        <p className={styles.summary_title}>Сводка</p>
        <ul className={styles.summary_list}>
          {incomes.map((el) => {
            return (
              <li className={styles.summary_listItem}>
                <span className={styles.summary_itemMonth}>{el.date}</span>
                <span className={styles.summary_itemSum}>{el.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Summary;
