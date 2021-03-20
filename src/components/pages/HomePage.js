import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Balance from "../Balance/Balance";

// import Notification from "../Notification/Notification";
import Summary from "../Summary/Summary"

import IncomesCostsSection from "../IncomesCostsSection";
import transactionOperation from "../../redux/transaction/transaction-operation";

const HomePage = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user.name);
  useEffect(() => {
    if (name) {
      dispatch(transactionOperation.getIncomes());
    }
  }, [name]);

  return (
    <>
      <Balance />
      <IncomesCostsSection />
    </>
  );
};
export default HomePage;
