import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";

// import Notification from "../Notification/Notification";

import IncomesCostsSection from "../IncomesCostsSection";

const HomePage = () => {
  return (
    <>
      <Balance />
      <IncomesCostsSection />
    </>
  );
};
export default HomePage;
