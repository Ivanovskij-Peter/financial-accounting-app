const getData = (state) => state.operations.monthIncoms;
const balance = (state) => state.auth.user.balance;

// eslint-disable-next-line import/no-anonymous-default-export
export default { balance, getData };
