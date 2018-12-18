import axios from 'axios';
var qs = require('qs');
const axioApi = axios.create({  
    baseURL: 'http://localhost:5000/api/',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => qs.stringify(data)],
    headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
    }
});
export default axioApi