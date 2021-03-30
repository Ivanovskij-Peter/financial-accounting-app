import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import transactionSelectors from "../../redux/transaction/transaction-selectors";
import Balance from "../Balance/Balance";
import IncomesCostsSection from "../IncomesCostsSection";

const HomePage = () => {
  const balance = useSelector(transactionSelectors.getBalance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrrentUser());
  }, [balance, dispatch]);
  return (
    <>
      <Balance />
      <IncomesCostsSection />
    </>
  );
};
export default HomePage;
