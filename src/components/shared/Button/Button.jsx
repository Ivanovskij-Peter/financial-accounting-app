import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

//прокидваем тип (primaty / secondary)
//если нужны доп стили или перебить стили, которые тут стоят - прокидываем их через проп addStyle. Ожидается, что они будут в формате модуля scss.
//всё остальное должно работать как и прежде

const Button = ({ btnType = "primary", addStyle = "", ...props }) => {
  return btnType === "primary" ? (
    <button className={`${styles["Button--primary"]} ${addStyle}`} {...props}>
      {props.children}
    </button>
  ) : (
    <button className={`${styles["Button--secondary"]} ${addStyle}`} {...props}>
      {props.children}
    </button>
  );
};

//TODO дописать
Button.propTypes = {
  btnType: PropTypes.string,
};

Button.defaultProps = {
  btnType: "primary",
};

export default Button;
