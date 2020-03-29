import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://sd-7hg.anonymous.mobile.exp.direct:80:3333'
    baseURL: 'http://192.168.10.16:3333'
});

export default api;