import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors } from "../../redux/auth/index";
import Header from "../header";
import GoToLink from "../../components/GoToLinkNotification/GoToLink";
import goToLinkStyles from "../../components/GoToLinkNotification/GoToLink.module.scss";
import errorSelector from "../../redux/error/error-selector";
import errorAction from "../../redux/error/error-action";
import styles from "./Layout.module.scss";


const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isUserLogged = useSelector(authSelectors.getIsAuthenticated);
  const error = useSelector(errorSelector.getError);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (error?.message === "Authentification is failed") {
      setIsError(true);
      dispatch(errorAction.setError());
    }
    if (isError) {
      setTimeout(() => setIsError(false), 5000);
    }
  }, [error, isError]);

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
        in={isError}
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
