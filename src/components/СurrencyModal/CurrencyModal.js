import React, { useEffect } from "react";
import AddIncomeCostForm from "../AddIncomeCostForm";
import styles from "./currencyModal.module.scss";
import sprite from "../../images/sprite.svg";

const CurrencyModal = ({ onClick, typeTransaction }) => {
  const handleBackClick = (e) => {
    onClick();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className={styles.currencyModal}>
      <button
        id="closeArrow"
        className={styles.currencyBack}
        onClick={handleBackClick}
      >
        <svg width="36px" height="20px" className={styles.backArrow}>
          <use href={sprite + "#back-arrow"} />
        </svg>
      </button>
      <AddIncomeCostForm typeTransaction={typeTransaction} />
    </div>
  );
};

export default CurrencyModal;
