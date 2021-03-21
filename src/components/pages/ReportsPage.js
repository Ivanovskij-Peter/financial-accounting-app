import React from "react";
import Reports from "../Reports";
import ReportBalance from "../Balance/ReportBalance";
import Total from "../Reports/Total";

const ReportsPage = () => {
  return (
    <>
      <ReportBalance />
      <Total />
      <Reports />
    </>
  );
};

export default ReportsPage;
