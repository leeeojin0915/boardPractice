import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080', // 백엔드 주소
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 필요시 (ex: 세션/쿠키)
});

export default instance;
