import axios from "axios";

const instance = axios.create({
    baseURL: 'https://market-organizer.herokuapp.com/'
});

export default instance;