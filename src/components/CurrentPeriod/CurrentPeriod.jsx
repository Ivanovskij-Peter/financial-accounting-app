import React, {Component} from "react";
import styles from "../CurrentPeriod/CurrentPeriod.module.scss";
import sprite from '../../images/sprite.svg';


const months = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
]

class CurrentPeriod extends Component {

  state = {
    activeMonthIndex: 0,
    items: months,
  }

  getActiveMonth = () => this.state.items[this.state.activeMonthIndex];

  showNext = () => {
    this.setState(state => ({activeMonthIndex: state.activeMonthIndex + 1}))
  };

  showPrev = () => {
    this.setState(state => ({activeMonthIndex: state.activeMonthIndex - 1}))
  };


render() {
  const {activeMonthIndex,  items} = this.state;
  const isOnFirstMonth =  activeMonthIndex === 0;
  const isOnLastMonth =  activeMonthIndex === items.length - 1;
  const month = this.getActiveMonth()

  return (
<div className={styles.mainWrapper}>
<p className={styles.currentTitle}>Текущий период:</p>
<div className={styles.wrapper}>

<button onClick={this.showPrev} disabled={isOnFirstMonth} className={styles.currentMonthBtn}>
  <svg width="10px" height="15px" fill='none' className={styles.currentImg}>
  <use href={sprite +"#period-back-arrow"} />
  </svg>
</button>
<p className={styles.currentMonth}>{month} 2021</p>
<button onClick={this.showNext} disabled={isOnLastMonth} className={styles.currentMonthBtn}>
<svg width="10px" height="15px" fill='none' className={styles.currentImg}>
  <use href={sprite +"#period-right-arrow"} />
  </svg>
</button>
</div>
</div>

  )
}
  }



export default CurrentPeriod;