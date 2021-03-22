import React, { Component } from "react";
import styles from "./incomesList.module.scss";
import { connect } from "react-redux";
import sprite from "../../images/sprite.svg";
import transactionOperation from "../../redux/transaction/transaction-operation";

class IncomesList extends Component {
  componentDidMount() {
    this.props.getIncomes();
  }

  render() {
    const mobile = window.innerWidth < 768;
    const { data, type, deleteIncome } = this.props;
    const withoutData = function () {
      const withDataTable = function (el) {
        if (el) {
          return (
            <tr key={el._id}>
              <td className={styles.leftCol}>{el.date.split("/").join(".")}</td>
              <td className={styles.leftCol}>
                {el.description.length >= 15
                  ? el.description.slice(0, 15) + "..."
                  : el.description}
              </td>
              <td className={styles.rightCol}>{el.category}</td>
              <td className={styles.amountCost}>{el.amount}</td>
              <td className={styles.tdButton}>
                <button>
                  <svg width="18px" height="18px">
                    <use href={sprite + "#delete-icon"} />
                  </svg>
                </button>
              </td>
            </tr>
          );
        } else {
          return (
            <tr>
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
        {data.map(({ _id, description, category, amount, date }) => {
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
                    {date.split("-").reverse().join(".")}
                  </span>
                  <p className={styles.secondary_text}>{category}</p>
                </div>
              </div>
              <div className={styles.right}>
                {type === "incomes" ? (
                  <span
                    className={styles.amountCost}
                  >{`- ${amount} грн.`}</span>
                ) : (
                  <span
                    className={styles.amountIncome}
                  >{`  ${amount} грн.`}</span>
                )}
                <button>
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
                    {date.split("-").join(".")}
                  </td>
                  <td className={styles.leftCol}>
                    {description.length >= 15
                      ? description.slice(0, 15) + "..."
                      : description}
                  </td>
                  <td className={styles.rightCol}>{category}</td>
                  {type === "incomes" ? (
                    <td className={styles.amountCost}>{`- ${amount} грн.`}</td>
                  ) : (
                    <td
                      className={styles.amountIncome}
                    >{`  ${amount} грн.`}</td>
                  )}
                  <td className={styles.tdButton}>
                    <button onClick={() => deleteIncome(_id)}>
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
  data: state.operations.incomes,
});
const mapDispatchToProps = (dispatch) => ({
  getIncomes: () => dispatch(transactionOperation.getIncomes()),
  deleteIncome: (id) => dispatch(transactionOperation.deleteIncomes(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(IncomesList);
