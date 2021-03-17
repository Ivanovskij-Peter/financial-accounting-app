import React from "react";
// import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
// import IncomesList from "../IncomesList/IncomesList";
import Notification from "../Notification/Notification";
import AddIncomeCostForm from "../AddIncomeCostForm/index";
const HomePage = () => {
  // const balance = useSelector((state) => state.balance.balance);
  return (
    <>
      <Balance />
      <Notification />
      <AddIncomeCostForm />

      {/* <IncomesList /> */}
    </>
  );
};
export default HomePage;
