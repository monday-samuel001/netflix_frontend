import axios from 'axios';

export default axios.create({
    baseURL:'http://18.215.34.165:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
