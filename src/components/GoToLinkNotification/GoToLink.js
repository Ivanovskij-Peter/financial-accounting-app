import React from "react";
import styles from "../GoToLinkNotification/GoToLink.module.scss";
import PropTypes from "prop-types";

const GoToLink = ({ message }) => {
  return <p className={styles.goToLinkNotification}>{message}</p>;
};

GoToLink.propTypes = {
  message: PropTypes.string,
};
GoToLink.defaultProps = {
  message:
    "Проверьте, пожалуйста, электронную почту и перейдите по ссылке для подтверждения регистрации",
};

export default GoToLink;
