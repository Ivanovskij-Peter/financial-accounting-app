const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUserBalance = (state) => state.auth.user.balance;
// eslint-disable-next-line import/no-anonymous-default-export
export default { getIsAuthenticated, getUserBalance };
