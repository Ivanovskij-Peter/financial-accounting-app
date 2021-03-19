import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import CurrencyInput from "react-currency-input-field";
import transactionOperation from "../../redux/transaction/transaction-operation";
import Notification from "../Notification/Notification";
import Report from "../Report";

import "./balance.scss";

export default function Balance() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleOnValueChange = (value) => {
    setValue(value);
    // console.log(value);
  };
  const handleClick = (e) => {
    dispatch(transactionOperation.setBalance(value));
  };
  const balance = useSelector((state) => state.balance.balance);

  return (
    <div className="balanceWrapper">
      {balance ? null : <Notification />}
      <div className="balance">
        <Report />
        <div className="balance_container">
          <p className="balance_title">Баланс:</p>
          <div className="balance_form">
            <CurrencyInput
              className="balance_input"
              id="input-example"
              name="input-name"
              value={value}
              placeholder={`${balance} UAH`}
              suffix={" UAH"}
              decimalSeparator={"."}
              decimalScale={2}
              onValueChange={handleOnValueChange}
            />
            <button
              type="button"
              className="balance_button"
              onClick={handleClick}
            >
              <span className="balance_botton-text">подтвердить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
