import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import styles from "./addIncomeCostForm.module.scss";
import sprite from "../../images/sprite.svg";
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
    e.preventDefault();
    this.setState({
      title: "",
      amount: "",
      description: "",
    });
  };

  handleSubmit = (values) => {
    const { typeTransaction, addTransaction, date, getMonthCost, getMonthIncome} = this.props;
    const { title, description, amount } = this.state;
    const transaction = {
      date: date,
      category: title,
      description: description,
      amount: Number(amount),
    };

    if (transaction.date && transaction.category && transaction.amount) {
      console.log("adding something ");
      addTransaction(typeTransaction, transaction);
      this.setState({
        title: "",
        amount: "",
        description: "",
      });
      typeTransaction === "costs"
        ? transactionOperation.getMonthCosts()
        : transactionOperation.getMonthIncomes();
    } else {
      return;
    }
  };

  render() {
    const { isOpen } = this.state;
    const { incomes, costs, typeTransaction } = this.props;
    let cathegories = typeTransaction === "incomes" ? incomes : costs;
    document.addEventListener("click", this.handleCloseList);
    return (
      <div className={styles.formContainer}>
         {mobile ? null : <Calendar />}
        <Formik
          initialValues={{ description: "", category: "", amount: "" }}
          onSubmit={(values) => {
            typeTransaction === 'incomes' ? getMonthIncome() : getMonthCost();
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
                placeholder={
                  typeTransaction === "incomes"
                    ? "Описание дохода"
                    : "Описание товара"
                }
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
                placeholder={
                  typeTransaction === "incomes"
                    ? "Категория дохода"
                    : "Категория товара"
                }
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
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
});
const mapDispatchToProps = {
  addTransaction: transactionOperation.addTransaction,
  getMonthCost: transactionOperation.getMonthCosts,
  getMonthIncome: transactionOperation.getMonthIncomes
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIncomeCostForm);
