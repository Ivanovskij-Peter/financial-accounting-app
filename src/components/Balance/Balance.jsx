import { useState } from "react";
import { useDispatch } from "react-redux";
import CurrencyInput from "react-currency-input-field";
import transactionOperation from "../../redux/transaction/transaction-operation";
import "./balance.scss";

export default function Balance() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleOnValueChange = (value) => {
    setValue(value);
  };
  const handleClick = () => {
    dispatch(transactionOperation.setBalance(value));
  };

  return (
    <div className="balance">
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
      </div>
    </div>
  );
}
