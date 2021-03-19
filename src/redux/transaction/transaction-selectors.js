const getDataMonth = (state) => state => state.date;
const getIncomesPerMonth = (state) => state => state.balance.incomes;
const getCostsPerMonth = (state) => state => state.balance.costs;


export default {getDataMonth, getIncomesPerMonth, getCostsPerMonth} 