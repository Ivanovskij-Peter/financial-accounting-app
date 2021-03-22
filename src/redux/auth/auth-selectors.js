const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUserBalance = (state) => state.operations.balance;
// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated, getUserBalance };
