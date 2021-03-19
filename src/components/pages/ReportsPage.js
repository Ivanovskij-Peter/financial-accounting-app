import React from "react";
import Reports from "../Reports";
import Balance from "../Balance/Balance";
import CurrentPeriod from "../CurrentPeriod/CurrentPeriod.jsx";
import Total from "../Reports/Total";

const ReportsPage = () => {
  return (
    <>
      <CurrentPeriod />
      <Balance />
      <Total />
      <Reports />
    </>
  );
};

export default ReportsPage;
