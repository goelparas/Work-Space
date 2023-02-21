import React, { useState, useEffect } from "react";
import logo from "../../resources/Icons/Logo.svg";
import { googleLogin } from "../../resources/Firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { checkLoginStatus, setLoginStatus } from "../../store/Userstore";
export const Login = () => {
  
  const [login,setLogin] = useState(checkLoginStatus());

  const navigate = useNavigate();

  useEffect(() => {
    if (checkLoginStatus()) {
      
      navigate("/");
    }
   
  }, [login]);

  const handleSubmit = async () => {
    const userCredential = await googleLogin();
    const {displayName,photoURL} = userCredential.user;
    
    if(userCredential)
    {
      
      setLoginStatus(displayName,photoURL);
      setLogin(checkLoginStatus());
    }
      
   
  };

  return (
    <div className="flex  min-w-70p  mx-auto my-28">
      <div className="flex flex-col mx-auto text-center p-8  sm:min-w-80p  sm:max-w-80p  md:min-w-50p  md:max-w-50p lg:min-w-40p  lg:max-w-40p lg:min-h-60p lg:max-h-60p border my-7 gap-8 items-center shadow-2xl rounded-2xl">
        <div className="image__container max-w-50p max-h-50p ">
          <img src={logo} alt={" WorkSpace"} className="m-auto w-100p h-100p "  />
        </div>
        <div className="channeldetail__container">
          <h1 className="font-semibold lg:text-2xl sm:text-normal">Sign in with the Workspace</h1>
          <span>
            <p className="font-thin sm:text-sm md:text-normal">workspace@gmail.com</p>
          </span>
        </div>
        <div className="flex flex-col m-2 w-100p items-center">
          <div className="login__container border p-3 bg-primaryviolet text-white hover:shadow-lg rounded-md overflow-hidden sm:max-w-70p md:max-w-60p">
            <button onClick={handleSubmit}>
              <p className="sm:text-xs md:text-base"> Signin with Google </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
