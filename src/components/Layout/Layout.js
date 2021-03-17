import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Header from "../header";
import isAuthenticated from "../../redux/auth/auth-selectors";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const isUserLogged = useSelector(isAuthenticated.getIsAuthenticated);
  console.log(isUserLogged);

  return (
    <>
      <Header />
      <div className={styles.mainTheme}>
        {isUserLogged ? (
          <div className={styles.loggedTheme}>{children}</div>
        ) : (
          <div className={styles.unloggedTheme}>{children}</div>
        )}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
