import axios from 'axios';

const cineApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export default cineApi