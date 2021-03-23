import React from "react";
import { useSelector } from "react-redux";
import getUserInfo from "../../redux/auth/auth-selectors.js";
import CurrencyInput from "react-currency-input-field";
import CurrentPeriod from "../CurrentPeriod/CurrentPeriod";
import "./balance.scss";

export default function ReportBalance() {
  const balance = useSelector(getUserInfo.getUserBalance);
  return (
    <div className="report_page_form">
      <CurrentPeriod />
      <div className="balance_form report_page_balance">
        <p className="balance_title">Баланс:</p>
        <CurrencyInput
          className="balance_input report-balance"
          id="input-example"
          name="input-name"
          placeholder={
            balance
              ? `${balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
              : "0.00 UAH"
          }
          suffix={" UAH"}
          decimalSeparator={"."}
          decimalScale={2}
        />
      </div>
    </div>
  );
}
