import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../CurrentPeriod/CurrentPeriod.module.scss";
import setDate from "../../redux/calendar/calendarAction";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

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
    currentMonth: +this.props.date.split(".")[0] - 1,
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
    history.push("/reports");
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
    history.push("/reports");
  };

  componentDidUpdate() {
    const { currentMonth, currentYear } = this.state;
    const month = currentMonth + 1;
    const date =
      month > 9 ? `${month}.01.${currentYear}` : `0${month}.01.${currentYear}`;
    this.props.setDate(date);
  }

  render() {
    const { currentMonth, currentYear } = this.state;

    return (
      <div className={styles.mainWrapper}>
        <p className={styles.currentTitle}>Текущий период:</p>
        <div className={styles.wrapper}>
          <button onClick={this.showPrev} className={styles.currentMonthBtn}>
            <svg className={styles.arrowBtnLeft} />
          </button>
          <p className={styles.currentMonth}>
            {months[currentMonth]} {currentYear}
          </p>
          <button onClick={this.showNext} className={styles.currentMonthBtn}>
            <svg className={styles.arrowBtnRight} />
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
