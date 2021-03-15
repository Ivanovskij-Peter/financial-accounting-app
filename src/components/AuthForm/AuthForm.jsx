import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

<<<<<<< HEAD
import Button from "../shared/Button";
=======
import Button from "../shared/Button/Button";
>>>>>>> afd910ddef8a449e4ba0ec36994be1f698f02cc9
import authOperations from "../../redux/auth/auth-operations";

import styles from "./AuthForm.module.scss";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Некорректная длинна поля")
    .max(30, "Превышен лимит символов")
    .required("это обязательное поле"),
  email: Yup.string()
    .min(2, "Некорректная длинна поля")
    .max(30, "Превышен лимит символов")
    .required("это обязательное поле"),
  password: Yup.string()
    .required("это обязательное поле")
    .min(8, "Минимальная длина 8 символов")
    .max(16, "Превышен лимит символов"),
});

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Некорректная длинна поля")
    .max(30, "Превышен лимит символов")
    .required("это обязательное поле"),
  password: Yup.string()
    .required("это обязательное поле")
    .min(8, "Минимальная длина 8 символов")
    .max(16, "Превышен лимит символов"),
});

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = ({ name, email, password }) => {
    location.pathname === "/register"
      ? dispatch(authOperations.register({ name, email, password }, history))
      : //TODO попросить ребят поправить бек, где в запросе на логин непонятно зачем требуется поле нейм
        dispatch(authOperations.logIn({ email, password }));
  };

  const handleClick = () => {
    location.pathname === "/register"
      ? history.push("/login")
      : history.push("/register");
  };

  return (
    <div className={styles.Auth}>
      <p className={styles.Auth__title}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      {/*//TODO поправить кнопку, когда пойму как она должна работать */}
      <button className={styles.Auth__googleBtn}>Google(заглушка)</button>
      {location.pathname === "/register" ? (
        <p className={styles.Auth__description}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
      ) : (
        <p className={styles.Auth__description}>
          Или зарегистрироваться с помощью e-mail и пароля:
        </p>
      )}

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={
          location.pathname === "/register" ? RegistrationSchema : SignInSchema
        }
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.Auth__form}>
            {location.pathname === "/register" && (
              <>
                <label htmlFor="name" className={styles.Auth__label}>
                  {touched.name && errors.name ? (
                    <span className={styles["Auth__label--is-invalid"]}>*</span>
                  ) : (
                    ""
                  )}
                  Имя
                </label>
                <div className={styles.Auth__inputWrapper}>
                  <Field
                    name="name"
                    type="text"
                    className={`${styles.Auth__input} ${
                      touched.name &&
                      errors.name &&
                      styles["Auth__input--is-invalid"]
                    }`}
                    placeholder="Имя"
                  />
                  <ErrorMessage
                    className={styles.Auth__errorMessage}
                    name="name"
                    component="p"
                  />
                </div>
              </>
            )}
            <label htmlFor="email" className={styles.Auth__label}>
              {touched.email && errors.email ? (
                <span className={styles["Auth__label--is-invalid"]}>*</span>
              ) : (
                ""
              )}
              Электронная почта:
            </label>
            <div className={styles.Auth__inputWrapper}>
              <Field
                name="email"
                type="email"
                placeholder="your@email.com"
                className={`${styles.Auth__input} ${
                  touched.email &&
                  errors.email &&
                  styles["Auth__input--is-invalid"]
                }`}
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="email"
                component="p"
              />
            </div>
            <label htmlFor="password" className={styles.Auth__label}>
              {touched.password && errors.password ? (
                <span className={styles["Auth__label--is-invalid"]}>*</span>
              ) : (
                ""
              )}
              Пароль:
            </label>
            <div className={styles.Auth__inputWrapper}>
              <Field
                name="password"
                type="password"
                className={`${styles["Auth__input--last"]} ${
                  touched.password &&
                  errors.password &&
                  styles["Auth__input--is-invalid"]
                }`}
                placeholder="Пароль"
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="password"
                component="p"
              />
            </div>

            <ul>
              <Button type="submit" addStyle={styles["Auth__button--register"]}>
                {location.pathname === "/register" ? "Регистрация" : "Войти"}
              </Button>
              <Button
                btnType="secondary"
                type="button"
                onClick={handleClick}
                addStyle={styles["Auth__button--enter"]}
              >
                {location.pathname === "/register" ? "Войти" : "Регистрация"}
              </Button>
            </ul>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
