import React, { Component } from "react";
import styles from "./incomesList.module.scss";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import sprite from "../../images/sprite.svg";
import transactionOperation from "../../redux/transaction/transaction-operation";

class IncomesList extends Component {
  componentDidMount() {
    this.props.getCosts();
    this.props.getIncomes();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.incomes.length !== prevProps.incomes.length ||
      this.props.costs.length !== prevProps.costs.length
    ) {
      this.props.getCosts();
      this.props.getIncomes();
    }
  }
  render() {
    const mobile = window.innerWidth < 768;
    const {
      typeTransaction,
      deleteIncome,
      incomes,
      costs,
      deleteCost,
      getCosts,
      getIncomes,
    } = this.props;
    let data = typeTransaction === "costs" ? costs : incomes;
    let dataMobile = costs.concat(incomes).sort(function (a, b) {
      return a.date - b.date;
    });
    const withoutData = function () {
      const withDataTable = function (el) {
        if (el) {
          return (
            <tr key={el._id}>
              <td className={styles.leftCol}>
                {el.date.split(".").slice(0, 2).reverse().join(".") +
                  "." +
                  el.date.split(".")[2]}
              </td>
              <td className={styles.leftCol}>
                {el.description.length >= 15
                  ? el.description.slice(0, 15) + "..."
                  : el.description}
              </td>
              <td className={styles.rightCol}>{el.category}</td>
              <td className={styles.amountCost}>
                {typeTransaction === "costs" ? (
                  <span className={styles.amountCost}>{`- ${
                    el.amount
                      ? `${el.amount
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                      : ""
                  } `}</span>
                ) : (
                  <span className={styles.amountIncome}>{` ${
                    el.amount
                      ? `${el.amount
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                      : ""
                  } `}</span>
                )}
              </td>
              <td className={styles.tdButton}>
                <button
                  onClick={
                    el.category === "Доп.доход" || el.category === "ЗП"
                      ? 
                      () => {
                          deleteIncome(el._id);
                          getIncomes();
                      }
                      :() => {
                          deleteCost(el._id);
                          getCosts();
                        }
                  }
                >
                  <svg width="18px" height="18px">
                    <use href={sprite + "#delete-icon"} />
                  </svg>
                </button>
              </td>
            </tr>
          );
        } else {
          return (
            <tr key={uuidv4()}>
              <td className={styles.leftCol}></td>
              <td className={styles.leftCol}></td>
              <td className={styles.rightCol}></td>
              <td className={styles.amountCost}></td>
              <td className={styles.tdButton}></td>
            </tr>
          );
        }
      };
      let markup = [];
      for (let i = 0; i < 9; i++) {
        markup = [...markup, withDataTable(data[i])];
      }
      return markup;
    };
    return mobile ? (
      <ul className={styles.list}>
        {dataMobile.map(({ _id, description, category, amount, date }) => {
          return (
            <li className={styles.listItem} key={_id + 1}>
              <div className={styles.left}>
                <p className={styles.description}>
                  {description.length >= 15
                    ? description.slice(0, 15) + "..."
                    : description}
                </p>
                <div>
                  <span className={styles.secondary}>
                    {date.split(".").slice(0, 2).reverse().join(".") +
                      "." +
                      date.split(".")[2]}
                  </span>
                  <p className={styles.secondary_text}>{category}</p>
                </div>
              </div>
              <div className={styles.right}>
                {category === "Доп.доход" || category === "ЗП" ? (
                  <span className={styles.amountIncome}>{`${
                    amount
                      ? `${amount
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                      : ""
                  } `}</span>
                ) : (
                  <span className={styles.amountCost}>{`- ${
                    amount
                      ? `${amount
                          .toFixed(2)
                          .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                      : ""
                  } `}</span>
                )}
                <button
                  onClick={
                    category === "Доп.доход" || category === "ЗП"
                      ? () => {
                          deleteIncome(_id);
                          getIncomes();
                        }
                      : () => {
                          deleteCost(_id);
                          getCosts();
                        }
                  }
                >
                  <svg width="18px" height="18px">
                    <use href={sprite + "#delete-icon"} />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    ) : (
      <table className={styles.incomesTable}>
        <thead>
          <tr>
            <td className={styles.leftCol}>ДАТА</td>
            <td className={styles.leftCol}>ОПИСАНИЕ</td>
            <td className={styles.centerCol}>КАТЕГОРИЯ</td>
            <td className={styles.rightCol}>СУММА</td>
            <td className={styles.clean}></td>
          </tr>
        </thead>
        <tbody>
          {data.length <= 9
            ? withoutData()
            : data.map(({ _id, description, category, amount, date, inx }) => (
                <tr key={inx}>
                  <td className={styles.leftCol}>
                    {date.split(".").slice(0, 2).reverse().join(".") +
                      "." +
                      date.split(".")[2]}
                  </td>
                  <td className={styles.leftCol}>
                    {description.length >= 15
                      ? description.slice(0, 15) + "..."
                      : description}
                  </td>
                  <td className={styles.rightCol}>{category}</td>
                  {typeTransaction === "costs" ? (
                    <td className={styles.amountCost}>{`- ${
                      amount
                        ? `${amount
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                        : ""
                    } `}</td>
                  ) : (
                    <td className={styles.amountIncome}>{` ${
                      amount
                        ? `${amount
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, "$& ")} UAH`
                        : ""
                    } `}</td>
                  )}
                  <td className={styles.tdButton}>
                    <button
                      onClick={
                        typeTransaction === "costs"
                          ? () => {
                              deleteCost(_id);
                              getCosts();
                            }
                          : () => {
                              deleteIncome(_id);
                              getIncomes();
                            }
                      }
                    >
                      <svg width="18px" height="18px">
                        <use href={sprite + "#delete-icon"} />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  incomes: state.operations.incomes,
  costs: state.operations.costs,
});
const mapDispatchToProps = (dispatch) => ({
  getIncomes: () => dispatch(transactionOperation.getIncomes()),
  getCosts: () => dispatch(transactionOperation.getCosts()),
  deleteIncome: (id) => dispatch(transactionOperation.deleteIncomes(id)),
  deleteCost: (id) => dispatch(transactionOperation.deleteCosts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(IncomesList);
