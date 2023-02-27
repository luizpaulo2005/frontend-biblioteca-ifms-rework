import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://biblioteca-ifms-rework-j8h0.onrender.com/'
})