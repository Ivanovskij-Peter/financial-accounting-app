import axios from "axios";

//TODO поменять на нормальный урл, когда зальём бэк на хостинг
axios.defaults.baseURL = "https://kapusta-srv.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080";

class PhonebookService {
  register(newUser) {
    return axios.post("/auth/register", newUser);
  }

  login(userCredentials) {
    return axios.post("/auth/login", userCredentials);
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
