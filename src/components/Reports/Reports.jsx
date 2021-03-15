import React, { useState } from "react";
import style from "./Reports.module.css";

const ReportsSection = () => {
  const [reportName, setReportName] = useState("РАСХОДЫ");

  const onChange = () => {
    reportName === "РАСХОДЫ"
      ? setReportName("ДОХОДЫ")
      : setReportName("РАСХОДЫ");
  };
  return (
    <section>
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
    </section>
  );
};

export default ReportsSection;
