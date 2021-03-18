import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getInfo from "../../redux/reports/reports-selectors.js";

import style from "./Reports.module.scss";

function Total() {
  const totalCosts = useSelector(getInfo.getUserTotalCosts);

  const beautyCosts = totalCosts
    ? totalCosts.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ")
    : totalCosts;

  const totalIncomes = useSelector(getInfo.getUserTotalIncomes);
  const beautyIncomes = totalIncomes
    ? totalIncomes.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ")
    : totalIncomes;
  return (
    <ul className={style.totalList}>
      <li>
        <h3 className={style.totalName}>Расходы:</h3>
        <p className={style.totalCosts}>{`- ${beautyCosts} грн.`}</p>
      </li>
      <li>
        <h3 className={style.totalName}>Доходы:</h3>
        <p className={style.totalIncomes}>{`+ ${beautyIncomes} грн.`}</p>
      </li>
    </ul>
  );
}
export default Total;
