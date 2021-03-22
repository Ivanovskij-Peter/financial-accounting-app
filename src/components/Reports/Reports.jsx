import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import reportOperations from "../../redux/reports/reports-operations";
import getInfo from "../../redux/reports/reports-selectors.js";
import CategoriesList from "./Categories.jsx";
import style from "./Reports.module.scss";

// const categoriesArr = [
//   {
//     total: 140,
//     name: "продукты",
//   },
//   {
//     total: 8,
//     name: "алкоголь",
//   },
//   {
//     total: 18,
//     name: "развлечение",
//   },
//   {
//     total: 188,
//     name: "здоровье",
//   },
//   {
//     total: 1268,
//     name: "все для дома",
//   },
//   {
//     total: 888,
//     name: "спорт, хобби",
//   },
//   {
//     total: 140,
//     name: "прочее",
//   },
//   {
//     total: 8,
//     name: "транспорт",
//   },
//   {
//     total: 18,
//     name: "техника",
//   },
//   {
//     total: 188,
//     name: "коммуналка, связь",
//   },
//   {
//     total: 1268,
//     name: "образование",
//   },
// ];

const Reports = () => {
  const [reportName, setReportName] = useState("РАСХОДЫ");
  const dispatch = useDispatch();
  const match = useRouteMatch("/reports");
  const date = useSelector(getInfo.getQueryDate);
  const dateArr = date.split(".");
  const normaldateArr = [dateArr[1], dateArr[0], dateArr[2]];
  const normalDate = normaldateArr.join("-");
  console.log("my date", normalDate);
  const userReports = useSelector(getInfo.getUserReports);
  console.log(userReports);
  // const date = "08-14-2021";

  useEffect(() => {
    dispatch(reportOperations(normalDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const onChange = () => {
    console.log("match", match);
    reportName === "РАСХОДЫ"
      ? setReportName("ДОХОДЫ")
      : setReportName("РАСХОДЫ");
  };

  return (
    <section className={style.reportSection}>
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

      {userReports ? (
        <CategoriesList
          reportName={reportName}
          categoriesArr={
            reportName === "РАСХОДЫ"
              ? userReports.costsArr
              : userReports.incomesArr
          }
        />
      ) : (
        "You're not created any transaction yet"
      )}
      {reportName === "РАСХОДЫ" && userReports.costsArr.length === 0 ? (
        <p className={style.noTransaction}>
          You're not created any transaction yet
        </p>
      ) : (
        ""
      )}
      {reportName === "ДОХОДЫ" && userReports.incomesArr.length === 0 ? (
        <p className={style.noTransaction}>
          You're not created any transaction yet
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default Reports;
