import axios from 'axios';

const api = axios.create({
    baseURL: 'https://megahackorama.herokuapp.com/'
});

export default api;