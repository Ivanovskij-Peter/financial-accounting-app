import React, { useEffect } from "react";

import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = ({ onClick, title, onAgree }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);
  const handleAgree = (e) => {
    onAgree();
  };
  const handleCloseClick = (e) => {
    console.log(e.target.nodeName);
    if (e.target.id === "disAgree" || e.target.id === "close") {
      onClick();
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <>
      <div className={styles.Backdrop}>
        <div className={styles.Modal}>
          <p className={styles.modalTitle}>{title}</p>
          <button
            id="close"
            className={styles.closeButton}
            onClick={handleCloseClick}
          ></button>

          <Button
            onClick={handleAgree}
            btnType="primary"
            id="agree"
            type="button"
          >
            Да
          </Button>
          <Button
            btnType="secondary"
            id="disAgree"
            type="button"
            onClick={handleCloseClick}
          >
            Нет
          </Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
