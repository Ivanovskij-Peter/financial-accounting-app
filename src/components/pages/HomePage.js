import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";

import Notification from "../Notification/Notification";

import IncomesCostsSection from "../IncomesCostsSection";

const HomePage = () => {
  const balance = useSelector((state) => state.auth.user.balance);

  const [state, setState] = useState(null);

  useEffect(() => {
    setState();
  }, [balance]);

  return (
    <>
      <Balance />
      {balance ? null : <Notification />}
      <IncomesCostsSection />
    </>
  );
};
export default HomePage;
