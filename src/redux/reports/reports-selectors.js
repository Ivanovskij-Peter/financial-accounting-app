const getQueryDate = (state) => state.date;
const getUserReports = (state) => state.reports;
const getUserTotalIncomes = (state) => state.reports.incomes.total;
const getUserTotalCosts = (state) => state.reports.costs.total;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getQueryDate,
  getUserReports,
  getUserTotalIncomes,
  getUserTotalCosts,
};
