import React from "react";

import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/index";

import Header from "../header";
import styles from "./Layout.module.scss";

import kapustaTitle from "../../images/kapusta.png";

const Layout = ({ children }) => {
  const token = useSelector(authSelectors.getToken);

  return (
    <>
      <Header />
      <div className={styles.mainTheme}></div>
      {token ? (
        <div className={styles.loggedTheme}>
          <div className={styles.container}>{children}</div>
        </div>
      ) : (
        <div className={styles.unloggedTheme}>
          <div className={styles.container}>
            <div className={styles.unloggedGroup}>
              <div className={styles.heroTitle}>
                <img
                  className={styles.kapustaTitle}
                  src={kapustaTitle}
                  alt="cabbige"
                />
                <p className={styles.smartFinance}>smart finance</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
