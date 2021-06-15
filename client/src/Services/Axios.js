import axios from "axios";
const Axios = axios.create({
    baseURL: "YOUR_API_ENDPOINT"
});
export default Axios;