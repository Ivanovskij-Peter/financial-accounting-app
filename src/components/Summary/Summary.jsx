import React, { Component } from 'react';
import styles from '../Summary/summary.module.scss';

class Summary extends Component {
  render() {
    return (
      <div className={styles.summary}>
        <p className={styles.summary_title}>Сводка</p>
        <ul className={styles.summary_list}>
          <li className={styles.summary_listItem}>
            {' '}
            <span className={styles.summary_itemMonth}>Ноябрь</span>{' '}
            <span className={styles.summary_itemSum}>10 000.00</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Summary;
