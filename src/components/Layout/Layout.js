import React from "react";
import PropTypes from "prop-types";
import { authSelectors } from "../../redux/auth/index";
import Header from "../header";

import styles from "./Layout.module.scss";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const isUserLogged = useSelector(authSelectors.getIsAuthenticated);
  return (
    <>
      <Header />
      <div className={styles.mainTheme}>
        {isUserLogged ? (
          <div className={styles.loggedTheme}>
            <div className={styles.container}>{children}</div>
          </div>
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
