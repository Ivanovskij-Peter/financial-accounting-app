import React, { useState } from "react";
import CategoriesList from "./Categories.jsx";
import style from "./Reports.module.scss";

const categoriesArr = [
  {
    total: 140,
    name: "продукты",
  },
  {
    total: 8,
    name: "алкоголь",
  },
  {
    total: 18,
    name: "развлечение",
  },
  {
    total: 188,
    name: "здоровье",
  },
  {
    total: 1268,
    name: "все для дома",
  },
  {
    total: 888,
    name: "спорт, хобби",
  },
];

const ReportsSection = () => {
  const [reportName, setReportName] = useState("РАСХОДЫ");

  const onChange = () => {
    reportName === "РАСХОДЫ"
      ? setReportName("ДОХОДЫ")
      : setReportName("РАСХОДЫ");
  };
  return (
    <section className="container">
      <div className={style.reportNav}>
        <button
          onClick={onChange}
          className={style.arrowBtnLeft}
          type="button"
        ></button>
        <h2 className={style.reportName}>{reportName}</h2>
        <button
          onClick={onChange}
          type="button"
          className={style.arrowBtnRight}
        ></button>
      </div>
      <CategoriesList categoriesArr={categoriesArr} />
    </section>
  );
};

export default ReportsSection;
