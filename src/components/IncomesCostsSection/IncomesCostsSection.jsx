import React, { useState } from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";
import CostsList from "../CostsList/CostsList";

const IncomesCostsSection = () => {
  const [typeTransaction, setTypeTransaction] = useState("costs");

  const handleClick = (e) => {
    const { name } = e.target;
    setTypeTransaction(name);
  };
  return (
    <>
      <div className={styles.IncomesCostsSection}>
        <ul className={styles.IncomesCostsSection__list}>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              name="costs"
              className={styles.IncomesCostsSection__list__button}
              onClick={handleClick}
            >
              РАСХОД
            </button>
          </li>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              name="incomes"
              className={styles.IncomesCostsSection__list__button}
              onClick={handleClick}
            >
              ДОХОД
            </button>
          </li>
        </ul>
        <div className={styles.IncomesCostsSection__container}>
          <AddIncomeCostForm typeTransaction={typeTransaction} />
          <div className={styles.lists}>
            {typeTransaction === "costs" ? (
              <CostsList />
            ) : typeTransaction === "incomes" ? (
              <IncomesList />
            ) : null}
          </div>
        </div>
        <Summary />
      </div>
    </>
  );
};

export default IncomesCostsSection;
