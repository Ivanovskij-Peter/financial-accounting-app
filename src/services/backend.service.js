import axios from "axios";

//TODO поменять на нормальный урл, когда зальём бэк на хостинг
const url = "http://localhost:3001/";
axios.defaults.baseURL = url;

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
}

export default new PhonebookService();
