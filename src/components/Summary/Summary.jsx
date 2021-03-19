import React from "react";
import { useSelector } from "react-redux";
import styles from "../Summary/Summary.module.scss";
// import {getDataMonth, getCostsPerMonth, getIncomesPerMonth} from '../../redux/transaction/transaction-selectors'


const Summary = () => {
  // const date = useSelector(getDataMonth)
  // const incomesPerMonth = useSelector(getIncomesPerMonth)
  // const costsPerMonth = useSelector(getCostsPerMonth)
  // const dispatch = useDispatch();

  return (
    <div className={styles.summary}>
      <p className={styles.summary_title}>Сводка</p>
      <ul className={styles.summary_list}>
        <li className={styles.summary_listItem}>
          <span className={styles.summary_itemMonth}>НОЯБРЬ</span>
          <span className={styles.summary_itemSum}>10 000.00</span>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
