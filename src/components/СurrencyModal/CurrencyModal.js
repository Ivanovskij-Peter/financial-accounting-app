import React, { useState } from "react";
import Modal from "../shared/Modal/Modal";
import AddIncomeCostForm from "../AddIncomeCostForm";
import styles from "./currencyModal.module.scss";
import sprite from "../../images/sprite.svg";

const CurrencyModal = ({ onClick }) => {
  // const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  const handleBackClick = (e) => {
    onClick();
  };

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
      <AddIncomeCostForm />
    </div>
  );
};

export default CurrencyModal;
