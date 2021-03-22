import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../CurrentPeriod/CurrentPeriod.module.scss";
import sprite from "../../images/sprite.svg";
import setDate from "../../redux/calendar/calendarAction";

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
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

class CurrentPeriod extends Component {
  state = {
    currentMonth: +this.props.date.split(".")[1] - 1,
    currentYear: +this.props.date.split(".")[2],
  };

  showNext = () => {
    const { currentMonth } = this.state;
    const isOnLastMonth = currentMonth === months.length - 1;
    if (isOnLastMonth) {
      this.setState((state) => ({
        currentYear: state.currentYear + 1,
        currentMonth: 0,
      }));
    } else {
      this.setState((state) => ({ currentMonth: state.currentMonth + 1 }));
    }
  };

  showPrev = () => {
    const { currentMonth } = this.state;
    const isOnFirstMonth = currentMonth === 0;
    if (isOnFirstMonth) {
      this.setState((state) => ({
        currentYear: state.currentYear - 1,
        currentMonth: 11,
      }));
    } else {
      this.setState((state) => ({ currentMonth: state.currentMonth - 1 }));
    }
  };

  componentDidUpdate() {
    const { currentMonth, currentYear } = this.state;
    const month = currentMonth + 1;
    const date =
      month > 9 ? `01.${month}.${currentYear}` : `01.0${month}.${currentYear}`;
    this.props.setDate(date);
  }

  render() {
    const { currentMonth, currentYear } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <p className={styles.currentTitle}>Текущий период:</p>
        <div className={styles.wrapper}>
          <button onClick={this.showPrev} className={styles.currentMonthBtn}>
            <svg className={styles.arrowBtnLeft}/>
            {/* <svg
              width="10px"
              height="15px"
              fill="none"
            >
              <use href={sprite + "#period-back-arrow"} />
            </svg> */}
          </button>
          <p className={styles.currentMonth}>
            {months[currentMonth]} {currentYear}
          </p>
          <button onClick={this.showNext} className={styles.currentMonthBtn}>
          <svg className={styles.arrowBtnRight}/>
            {/* <svg
              width="10px"
              height="15px"
              fill="none"
            >
              <use href={sprite + "#period-right-arrow"} />
            </svg> */}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: state.date,
});

const mapDispatchToProps = {
  setDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPeriod);
