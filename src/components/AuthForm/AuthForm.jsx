import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Button from "../shared/Button";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import errorActions from "../../redux/error/error-action";
import sprite from "../../images/test.svg";
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

const CLIENT_ID =
  "808016628595-3fn6i4opb25up534t8aksafg63go4asb.apps.googleusercontent.com";

const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const authError = useSelector(authSelectors.getError);

  const handleSubmit = ({ name, email, password }) => {
    location.pathname === "/register"
      ? dispatch(authOperations.register({ name, email, password }, history))
      : dispatch(authOperations.logIn({ email, password }));
  };

  const handleClick = () => {
    dispatch(errorActions.setErrorToNull());
    location.pathname === "/register"
      ? history.push("/login")
      : history.push("/register");
  };

  const handleGoogleLogin = ({ tokenId }) => {
    dispatch(authOperations.logInWithGoogle({ token: tokenId }));
  };

  const handleGoogleLoginFailure = (response) => {
    console.log(response);
  };

  return (
    <div className={styles.Auth}>
      <p className={styles.Auth__title}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <GoogleLogin
        clientId={CLIENT_ID}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className={styles.Auth__googleBtn}
          >
            <svg width="18" height="18" className={styles.Auth__googleBtnIcon}>
              <use href={sprite + "#icon-google"}></use>
            </svg>
            Sign In
          </button>
        )}
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLoginFailure}
        responseType="code,token"
      />
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
        {({ errors, touched, handleBlur }) => (
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
                onBlur={(e) => {
                  handleBlur(e);
                  dispatch(errorActions.setErrorToNull());
                }}
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
                onBlur={(e) => {
                  handleBlur(e);
                  dispatch(errorActions.setErrorToNull());
                }}
              />
              <ErrorMessage
                className={styles.Auth__errorMessage}
                name="password"
                component="p"
              />
              {authError === "Request failed with status code 404" &&
                !errors.password && (
                  <p className={styles.Auth__errorMessage}>
                    Invalid email or password
                  </p>
                )}
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
