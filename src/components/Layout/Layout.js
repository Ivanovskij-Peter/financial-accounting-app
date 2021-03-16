import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header'
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={styles.mainTheme}>
      {/* <div className={styles.unloggedTheme}></div> */}
      <div className={styles.loggedTheme}></div>
    {children}
    </div>
    
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;