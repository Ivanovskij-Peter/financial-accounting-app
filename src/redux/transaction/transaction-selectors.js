const getDataMonth = (state) => state => state.date;
const getIncomesPerMonth = (state) => state => state.balance.incomes;
const getCostsPerMonth = (state) => state => state.balance.costs;
const balance = (state) => state.auth.user.balance;
console.log("balance:", balance);


// eslint-disable-next-line import/no-anonymous-default-export
export default { balance, getDataMonth, getIncomesPerMonth, getCostsPerMonth };
