import axios from "axios";

const instance = axios.create({
    baseURL: "https://kanban-f5304.firebaseio.com/",
});

export default instance;
