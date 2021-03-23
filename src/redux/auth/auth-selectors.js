const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUserBalance = (state) => state.operations.balance;
const getToken = (state) => state.auth.token;
const getName = (state) => state.auth.user.name;
// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated, getUserBalance, getToken, getName };
