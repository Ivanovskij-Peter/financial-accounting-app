import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import transactionOperation from "../../redux/transaction/transaction-operation";
import getDataInfo from "../../redux/transaction/transaction-selectors";
import styles from "./summary.module.scss";

const Summary = (props) => {
  const incomes = useSelector(getDataInfo.getDataIncomes);
  const costs = useSelector(getDataInfo.getDataCosts);
  const { typeTransaction } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("incomesLength:", costs.length);
    typeTransaction === "costs"
      ? dispatch(transactionOperation.getMonthCosts())
      : dispatch(transactionOperation.getMonthIncomes());
  }, [incomes.length, costs.length]);

  let data = typeTransaction === "costs" ? costs : incomes;

  return (
    <>
      <div className={styles.summary}>
        <p className={styles.summary_title}>Сводка</p>
        <ul className={styles.summary_list}>
          {data.map((el) => {
            return (
              <li className={styles.summary_listItem} key={el.date}>
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
