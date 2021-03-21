import React from "react";
import Reports from "../Reports";
import ReportBalance from "../Balance/ReportBalance";
import Total from "../Reports/Total";
import BackHome from "../BackHome";

const ReportsPage = () => {
  return (
    <>
      <BackHome />
      <ReportBalance />
      <Total />
      <Reports />
    </>
  );
};

export default ReportsPage;
