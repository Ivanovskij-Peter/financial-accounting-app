const getDataIncomes = (state) => state.operations.monthIncoms;
const getDataCosts = (state) => state.operations.monthCosts;
const getAllIncomes = (state) => state.operations.incomes;
const getAllCosts = (state) => state.operations.costs;
const getBalance = (state) => state.operations.balance;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataIncomes,
  getDataCosts,
  getAllIncomes,
  getAllCosts,
  getBalance,
};
