import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import styles from "./addIncomeCostForm.module.scss";
import sprite from "../../images/sprite.svg";

import Button from "../shared/Button/Button";
import Calendar from "../Calendar";

const mobile = window.innerWidth < 768;

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .max(20, "Превышен лимит символов")
    .required("это обязательное поле"),
  category: Yup.string().required("это обязательное поле"),
  amount: Yup.string().required("это обязательное поле"),
});

class AddIncomeCostForm extends Component {
  state = {
    isOpen: false,
    title: "",
  };
  static defaultProps = {
    cathegories: [
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
    incomesCathegories: ["ЗП", "Доп.доход"],
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

  handleSubmit = ({ description, category, amount }) => {
    console.log(description, category, amount);
  };
  render() {
    const { isOpen, title } = this.state;
    const { cathegories, incomesCathegories } = this.props;
    document.addEventListener("click", this.handleCloseList);

    return (
      //  <div className={styles.formPosition}>
      <div className={styles.formContainer}>
        <Calendar />

        <Formik
          initialValues={{ description: "", category: "", amount: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
        >
          <Form className={styles.form}>
            <div className={styles.Auth__inputWrapper}>
              <Field
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
                name="category"
                type="text"
                className={styles.Auth__input}
                placeholder="Категория товара"
                value={title}
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
                  {cathegories.map((el) => (
                    <li className={styles.cathegory__item}>{el}</li>
                  ))}
                </ul>
              )}
            </div>
            {/* <div className={styles.Auth__inputWrapper} onClick={this.handleOpenList}>
              <Field
                name="category"
                type="text"
                className={styles.Auth__input}
                placeholder="Категория товара"
                value={title}
                disabled
              />
              <button className={styles.cathegory_btn}>
                {isOpen ?
                  (<svg width="20px" height="20" className={styles.iconUp}>
                    <use href={sprite +"#arrov-down"} />
                  </svg>)
                  :
                  (<svg width="20px" height="20" className={styles.icon}>
                    <use href={sprite +"#arrov-down"} />
                  </svg>)
                }
              </button>
              {isOpen && 
                <ul onClick={this.changeCathegory} className={styles.category_list}>
                {incomesCathegories.map((el) => (<li className={styles.cathegory__item}>{el}</li>))}
                </ul>
              }
            </div> */}
            <div className={styles.Auth__amountInputWrapper}>
              <Field
                value={mobile ? "00.00 UAH" : "0.00"}
                name="amount"
                type="text"
                className={styles.Auth__amountInput}
                placeholder="Имя"
              />
              <div>
                <svg width="20px" height="20px">
                  <use href={sprite + "#calculator"} />
                </svg>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="submit">ВВОД</Button>
              <Button btnType="secondary" type="button">
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

export default AddIncomeCostForm;
