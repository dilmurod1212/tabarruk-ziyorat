import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('locale') || 'en'
export default axios
