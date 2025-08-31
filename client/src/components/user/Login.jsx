import "./login.css"
import Img from '../imageKit/Img';
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserlogin } from "../../utils/api.js";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()

  //Dummy login - logout
  const {login} = useAuth()

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

   const handleSubmit = async (e) => {
     e.preventDefault();

      //if valid email and password ain't provided
      if(!email && !password){
        toast.error(" ❌ Please put your real credentials!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }

      const userLogin = await getUserlogin({
        email : email,
        password : password
      })

      if (userLogin.status) {
        login(userLogin.data)
        navigate("/"); // Redirect after login
      }else{
         toast.error(" ❌ User login failed! Please try again later", {
           position: "top-right",
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         });
      }
   };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="h-[600px] w-[600px] flex items-center border bg-white rounded-2xl overflow-hidden">
        {/* White background base layer */}
        <div className="w-[50%] h-full bg-[#0c1b2a] flex flex-col relative items-center justify-center right-curve">
          <Img src={"/bird.png"} width={300} height={300} alt={"Logo"} />
          <div className="absolute bottom-[28%] font-normal text-amber-200 text-5xl">Nslog</div>
        </div>
        <div className="w-[50%] h-full bg-white flex items-center justify-center">
          <form className="flex flex-col items-center justify-center h-[300px] mt-9" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                placeholder="s@gmail.com"
                className="input-field"
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="input-field" className="input-label">
                Email
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                placeholder="********"
                className="input-field"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="input-field" className="input-label">
                Password
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="mt-4">
              <button className="button">
                <span className="button-content">Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
