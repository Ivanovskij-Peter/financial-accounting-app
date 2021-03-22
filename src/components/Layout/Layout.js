import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { authSelectors } from "../../redux/auth/index";
import Header from "../header";
import GoToLink from "../../components/GoToLinkNotification/GoToLink";
import goToLinkStyles from "../../components/GoToLinkNotification/GoToLink.module.scss";

import styles from "./Layout.module.scss";
import { useSelector } from "react-redux";

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
        <div className={styles.unloggedTheme}>{children}</div>
      )}
        <CSSTransition
        in={!isUserLogged}
        timeout={2500}
        classNames={goToLinkStyles}
        unmountOnExit
      >
        <GoToLink />
      </CSSTransition>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
