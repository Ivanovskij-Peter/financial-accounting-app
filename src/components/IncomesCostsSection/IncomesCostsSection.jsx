import React, { useState } from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";

import CurrencyModal from "../СurrencyModal";

const IncomesCostsSection = () => {
  const [typeTransaction, setTypeTransaction] = useState("costs");

  const [showModal, setShowModal] = useState(false);
  const handleClick = (e) => {
    const { name } = e.target;
    setTypeTransaction(name);
    setShowModal(!showModal);
  };
  const mobileView = window.innerWidth < 768;

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };
  const handleMobileModal = (e) => {
    const { name } = e.target;
    setTypeTransaction(name);
    setShowModal(true);
  };
  return (
    <>
      {mobileView ? (
        <div>
          <>
            {showModal ? (
              <CurrencyModal
                onClick={toggleModal}
                typeTransaction={typeTransaction}
              />
            ) : null}
          </>
          <>
            <ul className={styles.IncomesCostsSection__list}>
              <li className={styles.IncomesCostsSection__list__item}>
                <button
                  name="costs"
                  className={styles.IncomesCostsSection__list__button}
                  onClick={handleMobileModal}
                >
                  РАСХОД
                </button>
              </li>
              <li className={styles.IncomesCostsSection__list__item}>
                <button
                  name="incomes"
                  className={styles.IncomesCostsSection__list__button}
                  onClick={handleMobileModal}
                >
                  ДОХОД
                </button>
              </li>
            </ul>
            {/* <div className={styles.IncomesCostsSection__container}> */}
            <div className={styles.lists}>
              <IncomesList typeTransaction={typeTransaction} />
            </div>
            {/* </div> */}
          </>
        </div>
      ) : (
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
              <IncomesList typeTransaction={typeTransaction} />
            </div>
          </div>
          <Summary typeTransaction={typeTransaction}/>
        </div>
      )}
    </>
  );
};

export default IncomesCostsSection;
