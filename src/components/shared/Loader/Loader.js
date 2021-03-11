import Loader from 'react-loader-spinner';
import React from 'react';
import styles from './Loader.module.css';

const Loaders=()=>{
    return (
      <Loader
        type="TailSpin"
        color="green"
        height={100}
        width={100}
        timeout={3000}
        className={styles.loader}
      />
    );
}
export default(Loaders)