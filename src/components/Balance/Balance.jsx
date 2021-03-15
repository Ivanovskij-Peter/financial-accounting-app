// import React, { Component } from "react";
import "./balance.scss";
import svg from "../../images/sprite.svg";
import { useState } from "react";
// import BalanceForm from "./BalanceForm"
import { Formik, Form, Field } from "formik";

import Actions from "../../redux/transaction/transaction-actions"

import CurrencyInput from "react-currency-input-field";

export default function Balance() {
        //  const [balance, setBalance] = useState(0);
    const [value, setValue] = useState("")

    const handleOnValueChange = (value) => {
        console.log(value);
        setValue(value) 
    }

    const handleClick = () => {
    console.log(value);
    }

    

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

          <button type="button" className="balance_button" onClick={handleClick}>
            <span className="balance_botton-text">подтвердить</span>
          </button>
       
        <p className="balance_calendar">дата</p>
      </div>
    </div>
  );
}

//    <div className="balance_form">
//       <input
//         onChange={handlechange}
//         value={balance}
//         type="number"
//         name="balance"
//         className="balance_input"
//       ></input>
//       <button type="submit" className="balance_button">
//         <span className="balance_botton-text">подтвердить</span>
//       </button>
//     </div>

// export default class Balance extends Component {
//   static defaultProps = {
//     startBalance: "0",
//   };

//   state = {
//     balance: this.props.startBalance + " UAH",
//   };

//   componentDidMount() {}

//   handlechange = (e) => {
//     this.setState({
//       balance: e.target.value + " UAH",
//     });
//   };

//   render() {
//     const { balance } = this.state;

//     return (
//       <div className="balance">
//         <div className="report">
//           <a href="" className="report_link">
//             <span className="report_link-deskription">Перейти к отчетам</span>
//           </a>
//           <svg className="report_icon">
//             <use href={svg + "#chart"} />
//           </svg>
//         </div>
//             <div className="balance_container">

//         <p className="balance_title">Баланс:</p>
//         <Formik>
//           <Form className="balance_form">
//             <Field
//               onChange={this.handlechange}
//               value={balance}
//               type="text"
//               name="email"
//               className="balance_input"
//             />
//             <button type="submit" className="balance_button">
//               <span className="balance_botton-text">подтвердить</span>
//             </button>
//           </Form>
//         </Formik>
//         <p className="balance_calendar">дата</p>
//         </div>
//       </div>
//     );
//   }
// }
