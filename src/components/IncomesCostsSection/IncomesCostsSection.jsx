import React from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList/IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm/index";

const IncomesCostsSection = () => {
  return (
    <>
      <div className={styles.IncomesCostsSection}>
        <ul className={styles.IncomesCostsSection__list}>
          <li className={styles.IncomesCostsSection__list__item}>
            <button className={styles.IncomesCostsSection__list__button}>
              РАСХОД
            </button>
          </li>
          <li className={styles.IncomesCostsSection__list__item}>
            <button className={styles.IncomesCostsSection__list__button}>
              ДОХОД
            </button>
          </li>
        </ul>
        <div className={styles.IncomesCostsSection__container}>
          <AddIncomeCostForm />
          <IncomesList />
        </div>
      </div>
    </>
  );
};

export default IncomesCostsSection;
