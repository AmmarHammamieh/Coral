import axios from "axios";


let baseURL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
    baseURL,
});
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 404) {
            window.location.replace('/404');
        }
        return Promise.reject(error);
    }
    
);

export default axiosInstance;
