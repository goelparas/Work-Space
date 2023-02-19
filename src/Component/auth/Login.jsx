import React, { useState, useEffect } from "react";
import logo from "../../resources/Icons/Slack-logo.png";
import { googleLogin } from "../../resources/Firebase/firebaseconfig";
import { UserContext } from "../../context/UserProvider";
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
    <div className="flex h-full items-center">
      <div className="flex flex-col mx-auto text-center p-8 w-30p h-50p border my-7 gap-8 items-center shadow-md">
        <div className="image__container">
          <img src={logo} alt={" Slack-Logo"} className="m-auto w-40p" />
        </div>
        <div className="channeldetail__container">
          <h1 className="font-semibold text-2xl">Sign in with the Workspace</h1>
          <span>
            <p>workspace@gmail.com</p>
          </span>
        </div>
        <div className="flex flex-col m-2">
          <div className="login__container border p-3 text-black hover:bg-primarypurple hover:text-white">
            <button onClick={handleSubmit}>
              <p>Sign in with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
