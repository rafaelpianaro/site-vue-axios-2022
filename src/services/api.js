import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://raw.githubusercontent.com/rafaelpianaro/mock-site-vue-axios-resources/main/api'
})

export default api