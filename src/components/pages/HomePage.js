import React from "react";
import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
// import IncomesList from "../IncomesList/IncomesList";
import Notification from "../Notification/Notification";
const HomePage = () => {
  const balance = useSelector((state) => state.balance.balance);
  return (
    <>
      <Balance />
      {balance ? <Notification /> : null}

      {/* <IncomesList /> */}
    </>
  );
};
export default HomePage;
