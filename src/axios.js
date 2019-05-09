import axios from "axios";

const instance = axios.create({
  baseURL: "https://stock-7592c.firebaseio.com/"
});

export default instance;
