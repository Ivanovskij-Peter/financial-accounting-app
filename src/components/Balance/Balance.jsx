import svg from "../../images/sprite.svg";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import { useDispatch } from "react-redux";
import transactionOperation from "../../redux/transaction/transaction-operation";
import "./balance.scss";

export default function Balance() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleOnValueChange = (value) => {
    setValue(value);
  };

  const handleClick = () => {
    dispatch(transactionOperation.setBalance(value));
  };

  return (
    <div className="balance">
      <div className="report">
        <a href="" className="report_link">
          <span className="report_link-deskription">Перейти к отчетам</span>
        </a>
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
            placeholder="00.00 UAH"
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

        <p className="balance_calendar">дата</p>
      </div>
    </div>
  );
}
