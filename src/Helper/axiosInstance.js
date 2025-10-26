import axios from "axios"
import { FAKE_API_URL } from "./constants"

const axiosinstance = axios.create({  //.create-> is a built in method of axios
    baseURL: FAKE_API_URL,
});

export default axiosinstance;