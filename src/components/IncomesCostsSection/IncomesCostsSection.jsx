import React, { useState } from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";

const IncomesCostsSection = () => {
  const [showTab, setshowTab] = useState("costs");

  const handleClick = (type) => {
    setshowTab(type);
  };
  return (
    <>
      <div className={styles.IncomesCostsSection}>
        <ul className={styles.IncomesCostsSection__list}>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              className={styles.IncomesCostsSection__list__button}
              onClick={()=>{handleClick("costs")}}
            >
              РАСХОД
            </button>
          </li>
          <li className={styles.IncomesCostsSection__list__item}>
            <button
              className={styles.IncomesCostsSection__list__button}
              onClick={()=>{handleClick("incomes")}}
            >
              ДОХОД
            </button>
          </li>
        </ul>
        <div className={styles.IncomesCostsSection__container}>
          <AddIncomeCostForm type={showTab==="costs" ? "costs":"incomes"}/>
          <div className={styles.lists}>
            <IncomesList type={showTab==="costs" ? "costs" :"incomes"} />
          </div>
        </div>
        <Summary />
      </div>
    </>
  );
};

export default IncomesCostsSection;
