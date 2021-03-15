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
    const { data, type } = this.props;

    return (
      <ul className={styles.list}>
        {data.map((el) => {
          return (
            <li className={styles.listItem} key={el.id}>
              <div className={styles.left}>
                <p className={styles.description}>{el.description}</p>
                <div>
                  <span className={styles.secondary}>{el.date}</span>
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
    );
  }
}
