import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import styles from "./addIncomeCostForm.module.scss";
import sprite from "../../images/sprite.svg";
import Button from "../shared/Button";
import Calendar from "../Calendar";
import transactionOperation from "../../redux/transaction/transaction-operation";
import Modal from "../shared/Modal/Modal";

const mobile = window.innerWidth < 768;

// const validationSchema = Yup.object().shape({
//   description: Yup.string()
//     .max(20, "Превышен лимит символов")
//     .required("это обязательное поле"),
//   category: Yup.string().required("это обязательное поле"),
//   amount: Yup.string().required("это обязательное поле"),
// });

class AddIncomeCostForm extends Component {
  state = {
    isOpen: false,
    date: "",
    title: "",
    description: "",
    showModal: false,
    amount: 0,
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
      showModal: !this.state.showModal,
    });
  };

  handleSubmit = (values) => {
    const { typeTransaction, addTransaction, date } = this.props;
    const { title, description, amount } = this.state;
    const transaction = {
      date: date,
      category: title,
      description: description,
      amount: Number(amount),
    };

    if (transaction.date && transaction.category && transaction.amount) {
      addTransaction(typeTransaction, transaction);
      this.setState({
        title: "",
        amount: "",
        description: "",
      });
    } else {
      return;
    }
  };

  render() {
    const { isOpen, showModal } = this.state;
    const { incomes, costs, typeTransaction } = this.props;
    const mobile = window.innerWidth < 768;
    let cathegories = typeTransaction === "incomes" ? incomes : costs;
    document.addEventListener("click", this.handleCloseList);
    return (
      <>
        {/* {showModal ? (
        <Modal onClick={this.handleClick} title="Вы уверены?" />
      ) : null} */}
        <div className={styles.formContainer}>
          {mobile ? null : <Calendar />}
          {/* <Calendar /> */}
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
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  date: state.date,
});
const mapDispatchToProps = {
  addTransaction: transactionOperation.addTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIncomeCostForm);
