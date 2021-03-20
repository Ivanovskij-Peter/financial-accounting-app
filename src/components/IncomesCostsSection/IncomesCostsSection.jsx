import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import IncomesList from "../IncomesList";
import AddIncomeCostForm from "../AddIncomeCostForm";
import Summary from "../Summary/Summary";
import styles from "./IncomesCostsSection.module.scss";

class IncomesCostsSection extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.IncomesCostsSection}>
          <ul className={styles.IncomesCostsSection__list}>
            <NavLink className={styles.IncomesCostsSection__list__item} to='/user/costs'>
              <button className={styles.IncomesCostsSection__list__button}>
                РАСХОД
              </button>
            </NavLink>
            <NavLink className={styles.IncomesCostsSection__list__item} to='/user/incomes'>
              <button className={styles.IncomesCostsSection__list__button}>
                ДОХОД
              </button>
            </NavLink>
          </ul>
          <div className={styles.IncomesCostsSection__container}>
            <AddIncomeCostForm />
            <div className={styles.lists}>
              <IncomesList />
            </div>
          </div>
          <Summary />
        </div>
      </>
    );
  }
}

export default IncomesCostsSection;
