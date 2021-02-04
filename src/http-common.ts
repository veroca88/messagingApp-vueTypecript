import axios from "axios";

export default axios.create({
    baseURL: "http://localhot:8080/api",
    headers: {
        "Content-type": "application/json"
    }
})