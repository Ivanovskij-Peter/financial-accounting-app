import React, {Component} from 'react';
import styles from './IncomesCostsSection.module.scss';
import IncomesList from '../IncomesList';
import AddIncomeCostForm from "../AddIncomeCostForm";

export default class IncomesCostsSection extends Component {
    state = {
        
    }
    render() {
        return (
            <>
                <div className={styles.IncomesCostsSection}>
                    <ul className={styles.IncomesCostsSection__list}>
                        <li className={styles.IncomesCostsSection__list__item}>
                            <button className={styles.IncomesCostsSection__list__button}>РАСХОД</button></li>
                        <li className={styles.IncomesCostsSection__list__item}>
                            <button className={styles.IncomesCostsSection__list__button}>ДОХОД</button></li>
                    </ul>
                <div className={styles.IncomesCostsSection__container}>
                        {/* {children} */}
      <AddIncomeCostForm />
      <IncomesList/>
                        
                         {/* <ul>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li> 
                        </ul>  */}
                    </div>
                </div>
                </>
 
    );
  }
}
