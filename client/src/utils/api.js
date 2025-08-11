import axios from "axios"
import {toast} from "react-toastify"

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials : true
});

export const getUserlogin = async({email = '', password = ''}) => {
    try {
        console.log(email, password, "passs")
        const res = await api.post('/user-login', {
            email,
            password
        })

        return {status : true, data : res.data};
    } catch (error) {
       toast.error("Something went wrong.", {
         closeButton: false,
       });
       return {status : false, message: error.message, data : []}
    }
}