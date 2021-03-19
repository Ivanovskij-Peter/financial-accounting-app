import React, { Component } from "react";
import styles from "./incomesList.module.scss";
import sprite from "../../images/sprite.svg";

export default class IncomesList extends Component {
  static defaultProps = {
    data: [
      {
        description: "Бананы",
        amount: 50,
        date: "2019-09-25",
        category: "Продукты",
        id: 1,
      },
      {
        description: "Метро",
        amount: 5,
        date: "2019-09-23",
        category: "Транспорт",
        id: 2,
      },
    ],
    type: "incomes",
  };

  render() {
    const mobile = window.innerWidth < 768;
    const { data, type } = this.props;

    const withoutData = function () {
      // const { data } = this.props;
      const withDataTable = function (el) {
        if (el) {
          return (
            <tr>
              <td className={styles.leftCol}>
                {el.date.split("-").reverse().join(".")}
              </td>
              <td className={styles.leftCol}>{el.description}</td>
              <td className={styles.rightCol}>{el.category}</td>
              <td className={styles.amountCost}>{el.amount}</td>
              <td className={styles.tdButton}>
                {" "}
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
        {data.map((el) => {
          return (
            <li className={styles.listItem} key={el.id}>
              <div className={styles.left}>
                <p className={styles.description}>{el.description}</p>
                <div>
                  <span className={styles.secondary}>
                    {el.date.split("-").reverse().join(".")}
                  </span>
                  <span className={styles.secondary}>{el.category}</span>
                </div>
              </div>
              <div className={styles.right}>
                {type === "incomes" ? (
                  <span
                    className={styles.amountCost}
                  >{`- ${el.amount} грн.`}</span>
                ) : (
                  <span
                    className={styles.amountIncome}
                  >{`  ${el.amount} грн.`}</span>
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
            : data.map((el) => (
                <tr key={el.id}>
                  <td className={styles.leftCol}>
                    {el.date.split("-").reverse().join(".")}
                  </td>
                  <td className={styles.leftCol}>{el.description}</td>
                  <td className={styles.rightCol}>{el.category}</td>
                  {type === "incomes" ? (
                    <td
                      className={styles.amountCost}
                    >{`- ${el.amount} грн.`}</td>
                  ) : (
                    <td
                      className={styles.amountIncome}
                    >{`  ${el.amount} грн.`}</td>
                  )}
                  <td className={styles.tdButton}>
                    <button>
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
