import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";

import setDate from "../../redux/calendar/calendarAction";
import styles from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends Component {
  state = {
    date: new Date(),
  };

  handleChange = (date) => {
    this.setState({ date: date });

    let month = date.getMonth() + 1;

    month = month.toString();

    if (month.length === 1) {
      month = `0${month}`;
    }

    const result = date
      ? `${month}.${date.getDate()}.${date.getFullYear()}`
      : date;
    this.props.setDate(result);
  };

  render() {
    return (
      <div className={styles.calendarWrapper}>
        <DatePicker
          className={styles.calendar}
          dateFormat="dd.MM.yyyy"
          selected={this.state.date}
          onChange={(date) => this.handleChange(date)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDate,
};

export default connect(null, mapDispatchToProps)(Calendar);
