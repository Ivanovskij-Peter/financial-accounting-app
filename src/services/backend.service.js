import axios from "axios";

axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";

class PhonebookService {
  register(newUser) {
    return axios.post("/auth/register", newUser);
  }

  login(userCredentials) {
    return axios.post("/auth/login", userCredentials);
  }

  loginWithGoogle(googleToken) {
    return axios.post("/auth/login-with-google", googleToken);
  }

  logout() {
    return axios.post("/auth/logout");
  }

  getCurrentUser() {
    return axios.get("/user");
  }

  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  }

  addTransaction(token, keyWord, transaction) {
    this.setToken(token);

    return axios.post(`/user/${keyWord}`, transaction);
  }
}

export default new PhonebookService();
