import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import reportOperations from "../../redux/reports/reports-operations";
import getReports from "../../redux/reports/reports-selectors";
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
  {
    total: 140,
    name: "прочее",
  },
  {
    total: 8,
    name: "транспорт",
  },
  {
    total: 18,
    name: "техника",
  },
  {
    total: 188,
    name: "коммуналка, связь",
  },
  {
    total: 1268,
    name: "образование",
  },
];

const Reports = () => {
  const [reportName, setReportName] = useState("РАСХОДЫ");
  const dispatch = useDispatch();
  // const date = useSelector(getReports);
  const date = "03-12-2021";

  useEffect(() => {
    dispatch(reportOperations(date));
  }, [date]);

  const onChange = () => {
    reportName === "РАСХОДЫ"
      ? setReportName("ДОХОДЫ")
      : setReportName("РАСХОДЫ");
  };
  const goToReports = () => {};
  return (
    <section className="container">
      <button onClick={goToReports}>Перейти к отчетам</button>
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

export default Reports;
