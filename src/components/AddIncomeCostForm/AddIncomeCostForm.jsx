import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./addIncomeCostForm.module.scss";
import sprite from "../../images/sprite.svg";

import Button from "../shared/Button";

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .max(20, "Превышен лимит символов")
    .required("это обязательное поле"),
  category: Yup.string().required("это обязательное поле"),
  amount: Yup.string().required("это обязательное поле"),
});

class AddIncomeCostForm extends Component {
  state = {};

  handleSubmit = ({ description, category, amount }) => {
    console.log(description, category, amount);
  };

  render() {
    return (
      <div className={styles.formContainer}>
        <Formik
          initialValues={{ description: "", category: "", amount: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
        >
          <Form>
            <div className={styles.Auth__inputWrapper}>
              <Field
                name="description"
                type="text"
                className={styles.Auth__input}
                placeholder="Описание товара"
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="description"
                component="p"
              />
            </div>
            <div className={styles.Auth__inputWrapper}>
              <Field
                name="category"
                type="text"
                className={styles.Auth__input}
                placeholder="Категория товара"
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="category"
                component="p"
              />
            </div>
            <div className={styles.Auth__amountInputWrapper}>
              <Field
                value={"00.00 UAH"}
                name="amount"
                type="text"
                className={styles.Auth__amountInput}
                placeholder="Имя"
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="amount"
                component="p"
              />
              <div>
                <svg width="20px" height="20px">
                  <use href={sprite + "#calculator"} />
                </svg>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
            <Button type="submit">ВВОД</Button>
            <Button btnType="secondary" type="button">ОЧИСТИТЬ</Button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default AddIncomeCostForm;
