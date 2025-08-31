import axios from "axios"
import {toast} from "react-toastify"

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials : true
});

//Helper to set authorization header
export const setAuthHeader = (token) => {
  if(token){
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }else{
    delete api.defaults.headers.common['Authorization']
  }
}

//Response interceptor to refresh token on 401
let isRefreshing = false;
let failedQueue = []

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });
  failedQueue = [];
};

api.interceptors.request.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    //if(erorr === 401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // backend will read refreshToken from cookie
        const res = await api.post(
          "/refreshToken"
        );
        const newToken = res.data?.accessToken;
        // update default header
        setAuthHeader(newToken);

        processQueue(null, newToken);
        isRefreshing = false;
        // retry original request
        originalRequest.headers["Authorization"] = "Bearer " + newToken;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        // optionally force logout or redirect to login
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);


export const getUserlogin = async({email = '', password = ''}) => {
    try {

        const res = await api.post('/user-login', {
            email,
            password
        })

        const payload = res.data?.data || []

        return { status: true, data: payload , message: res.data?.message};
    } catch (error) {
       toast.error("Something went wrong.", {
         closeButton: false,
       });
       return {status : false, message: error.message, data : []}
    }
}