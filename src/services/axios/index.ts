import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://d17ebfa37766.ngrok.io/',
    // baseURL: 'http://71516d6a71f2.ngrok.io/proline/web/client',
    headers: {
        'Content-Type': 'application/json'
    }
})

export { apiClient }
