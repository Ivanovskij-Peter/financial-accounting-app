import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import IncomesList from "../IncomesList/IncomesList";
import Notification from "../Notification/Notification";
import AddIncomeCostForm from "../AddIncomeCostForm/index";

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
      <AddIncomeCostForm />

      <IncomesList />
    </>
  );
};
export default HomePage;
