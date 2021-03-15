import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
    window.addEventListener("click", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
    window.removeEventListener("click", this.handleCloseModal);
  }
  handleCloseModal = (e) => {
    if (
      e.code === "Escape" ||
      e.target.id === "disAgree" ||
      e.target.id === "agree" ||
      e.target.id === "close"
    ) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className={styles.Backdrop}>
        <div className={styles.Modal}>
          <p className={styles.modalTitle}>{this.props.children}</p>
          <button
            id="close"
            className={styles.closeButton}
            onClose={this.handleCloseModal}
          ></button>

          <button id="agree" className={styles.buttonPrimary} type="button">
            Да
          </button>
          <button
            id="disAgree"
            className={styles.buttonSecondary}
            type="button"
          >
            Нет
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
