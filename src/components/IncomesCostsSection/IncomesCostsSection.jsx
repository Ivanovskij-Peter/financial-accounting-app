import React, { useState } from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";
import CostsList from "../CostsList/CostsList";

const IncomesCostsSection = () => {
  const [showTab, setshowTab] = useState(false);

  const handleClick = () => {
    setshowTab(!showTab);
  };
  return (
    <>
      <div className={styles.IncomesCostsSection}>
        <ul className={styles.IncomesCostsSection__list}>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              className={styles.IncomesCostsSection__list__button}
              onClick={handleClick}
            >
              РАСХОД
            </button>
          </li>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              className={styles.IncomesCostsSection__list__button}
              onClick={handleClick}
            >
              ДОХОД
            </button>
          </li>
        </ul>
        <div className={styles.IncomesCostsSection__container}>
          <AddIncomeCostForm />
          <div className={styles.lists}>
            {showTab ? <CostsList /> : <IncomesList />}
            <Summary />
          </div>
          <Summary />
        </div>
      </div>
    </>
  );
};

export default IncomesCostsSection;
