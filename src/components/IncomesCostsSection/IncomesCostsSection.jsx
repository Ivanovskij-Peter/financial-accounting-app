import React, { useState } from "react";
import styles from "./IncomesCostsSection.module.scss";
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";
import CostsList from "../CostsList/CostsList";
import CurrencyModal from "../СurrencyModal";

const IncomesCostsSection = () => {
  const [showTab, setshowTab] = useState(false);

  const handleClick = () => {
    setshowTab(!showTab);
  };
  const mobileView = window.innerWidth < 768;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {mobileView ? (
        <div>
          <>{showModal ? <CurrencyModal onClick={toggleModal} /> : null}</>
          <>
            <ul className={styles.IncomesCostsSection__list}>
              <li className={styles.IncomesCostsSection__list__item}>
                <button
                  className={styles.IncomesCostsSection__list__button}
                  onClick={toggleModal}
                >
                  РАСХОД
                </button>
              </li>
              <li className={styles.IncomesCostsSection__list__item}>
                <button
                  className={styles.IncomesCostsSection__list__button}
                  onClick={toggleModal}
                >
                  ДОХОД
                </button>
              </li>
            </ul>
          </>
        </div>
      ) : (
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
            </div>
          </div>
          <Summary />
        </div>
      )}

      {/* <div className={styles.IncomesCostsSection}>
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
          </div>
        </div>
        <Summary />
      </div> */}
    </>
  );
};

export default IncomesCostsSection;
