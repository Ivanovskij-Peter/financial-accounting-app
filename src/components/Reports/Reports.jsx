import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import reportOperations from "../../redux/reports/reports-operations";
import getInfo from "../../redux/reports/reports-selectors.js";
import CategoriesList from "./Categories.jsx";
import style from "./Reports.module.scss";

const Reports = () => {
  const [reportName, setReportName] = useState("РАСХОДЫ");
  const dispatch = useDispatch();
  const history = useHistory();
  const date = useSelector(getInfo.getQueryDate);
  const dateArr = date.split(".");
  const normaldateArr = [dateArr[1], dateArr[0], dateArr[2]];
  const normalDate = normaldateArr.join("-");
  const userReports = useSelector(getInfo.getUserReports);

  useEffect(() => {
    dispatch(reportOperations(normalDate));
    return dispatch(reportOperations(normalDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const onChange = () => {
    reportName === "РАСХОДЫ"
      ? setReportName("ДОХОДЫ")
      : setReportName("РАСХОДЫ");

    history.push("/reports");
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
          You have not created any transaction yet
        </p>
      ) : (
        ""
      )}
      {reportName === "ДОХОДЫ" && userReports.incomesArr.length === 0 ? (
        <p className={style.noTransaction}>
          You have not created any transaction yet
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default Reports;
