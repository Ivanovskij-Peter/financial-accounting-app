import React from "react";
import PropTypes from "prop-types";
import { authSelectors } from "../../redux/auth/index";

import Header from "../header";

import styles from "./Layout.module.scss";
import { useSelector } from "react-redux";

import kapustaTitle from "../../images/kapusta.png";

const Layout = ({ children }) => {
  const isUserLogged = useSelector(authSelectors.getIsAuthenticated);
  return (
    <>
      <Header />
      <div className={styles.mainTheme}></div>
      {isUserLogged ? (
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

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
