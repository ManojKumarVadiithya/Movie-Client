import axios from 'axios';

export default axios.create({
    baseURL:'https://fc8f36733eae.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});