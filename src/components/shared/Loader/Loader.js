import Loader from "react-loader-spinner";
import React from "react";
import styles from "./Loader.module.scss";

const Loaders = () => {
  return (
    <Loader
      type="TailSpin"
      color="orange"
      height={50}
      width={50}
      timeout={3000}
      className={styles.loader}
    />
  );
};
export default Loaders;
