import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import svg from "../../images/sprite.svg";
import CurrencyInput from "react-currency-input-field";
import transactionOperation from "../../redux/transaction/transaction-operation";
import "./balance.scss";

export default function Balance() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleOnValueChange = (value) => {
    setValue(value);
    console.log(value);
  };
  const handleClick = (e) => {
    dispatch(transactionOperation.setBalance(value));
  };
  const balance = useSelector((state) => state.auth.user.balance);

  return (
    <div className="balance">
      <div className="report">
        <Link to="/reports" className="report_link-deskription report_link">
          Перейти к отчетам
        </Link>

        <svg className="report_icon">
          <use href={svg + "#chart"} />
        </svg>
      </div>
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

        {/* <p className="balance_calendar">дата</p> */}

      </div>
    </div>
  );
}
