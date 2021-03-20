const getData = (state) => state.operations.incomes;
const balance = (state) => state.auth.user.balance;
console.log("balance:", balance);


// eslint-disable-next-line import/no-anonymous-default-export
export default { balance, getData };
