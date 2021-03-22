import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import { connect } from "react-redux";

import styles from "./addIncomeCostForm.module.scss";
import sprite from "../../images/sprite.svg";
import PhonebookService from "../../services/backend.service";
import Button from "../shared/Button";
import Calendar from "../Calendar";
import transactionOperation from "../../redux/transaction/transaction-operation";

const mobile = window.innerWidth < 768;

class AddIncomeCostForm extends Component {
  state = {
    isOpen: false,
    date: "",
    title: "",
    description: "",
    amount: "",
  };

  static defaultProps = {
    costs: [
      "Транспорт",
      "Продукты",
      "Здоровье",
      "Алкоголь",
      "Развлечения",
      "Все для дома",
      "Техника",
      "Коммуналка, связь",
      "Спорт, хобби",
      "Образование",
      "Прочее",
    ],
    incomes: ["ЗП", "Доп.доход"],
    type: "",
  };

  handleOpenList = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleCloseList = (e) => {
    if (
      e.target.nodeName === "HTML" ||
      e.target.nodeName === "DIV" ||
      e.target.nodeName === "TD"
    ) {
      this.setState({
        isOpen: false,
      });
    }
  };

  changeCathegory = (e) => {
    if (e.target.nodeName === "LI") {
      this.setState({
        title: e.target.textContent,
        isOpen: !this.state.isOpen,
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log({ [name]: value });
  };

  handleClick = (e) => {
    this.setState({
      title: "",
      amount: "",
      description: "",
    });
  };

  handleSubmit = (values) => {
    const {type, date, token} = this.props;
    const {title, description, amount} = this.state;
    const transaction = {
      date: date,
      category: title,
      description: description,
      amount: amount,
      id: `${Date.now()}`,
    };

    console.log("transaction", transaction)
if (transaction.date && transaction.category&& transaction.amount) {
    PhonebookService.addTransaction(token, type, transaction)
      .then(data => console.log("data1", data))
    .catch(data => console.log("data2", data));
} else {
  return 
}

  };

  render() {
    const { isOpen } = this.state;
    const { incomes, costs, type } = this.props;
    let cathegories = type === 'incomes' ? incomes : costs;

    document.addEventListener("click", this.handleCloseList);
    return (
      //  <div className={styles.formPosition}>
      <div className={styles.formContainer}>
        <Calendar />
        <Formik
          initialValues={{ description: "", category: "", amount: "" }}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
        >
          <Form className={styles.form}>
            <div className={styles.Auth__inputWrapper}>
              <Field
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                type="text"
                className={styles.Auth__input}
                placeholder="Описание товара"
              />
            </div>
            <div
              className={styles.Auth__inputWrapper}
              onClick={this.handleOpenList}
            >
              <Field
                name="title"
                type="text"
                className={styles.Auth__input}
                placeholder={type==="incomes"?"Категория дохода":"Категория товара"}
                onChange={this.handleChange}
                value={this.state.title}
                disabled
              />
              <button className={styles.cathegory_btn}>
                {isOpen ? (
                  <svg width="20px" height="20" className={styles.iconUp}>
                    <use href={sprite + "#arrov-down"} />
                  </svg>
                ) : (
                  <svg width="20px" height="20" className={styles.icon}>
                    <use href={sprite + "#arrov-down"} />
                  </svg>
                )}
              </button>
              {isOpen && (
                <ul
                  onClick={this.changeCathegory}
                  className={styles.category_list}
                >
                  {cathegories.map((el, inx) => (
                    <li className={styles.cathegory__item} key={inx}>
                      {el}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.Auth__amountInputWrapper}>
              <Field
                onChange={this.handleChange}
                value={this.state.amount}
                name="amount"
                type="text"
                className={styles.Auth__amountInput}
                placeholder={mobile ? "00.00 UAH" : "0,00"}
              />
              <div>
                <svg width="20px" height="20px">
                  <use href={sprite + "#calculator"} />
                </svg>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="submit">ВВОД</Button>
              <Button
                btnType="secondary"
                type="button"
                onClick={this.handleClick}
              >
                ОЧИСТИТЬ
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
      //  </div>
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
  token: state.auth.token
});
const mapDispatchToProps = (dispatch) => ({
  add: (income) => dispatch(transactionOperation.setIncomes(income)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIncomeCostForm);
