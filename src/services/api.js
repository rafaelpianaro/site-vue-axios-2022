import axios from 'axios';

const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/api'
})

export default api