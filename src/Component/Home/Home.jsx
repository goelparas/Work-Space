import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { SideBar } from "../Sidebar/SideBar";
import { Header } from "../Header/Header";
import { ChatBox } from "../ChatBox/ChatBox";
import { checkLoginStatus } from "../../store/Userstore";
import {PromptMessage} from "../PromptMessage/PromptMessage";

export const Home = () => {
  const navigate = useNavigate();
  const { docID } = useParams();
  useEffect(() => {
    if (!checkLoginStatus()) {
      navigate("/login");
    }
  });

  return (
    <div className="flex flex-col  w-100p  fixed h-screen">
      {checkLoginStatus() ? (
        <>
          <div className="header__container  min-h-10p ">
            <Header />
          </div>
          <div className="chatbox__container  flex flex-row min-h-90p">
            <SideBar />
            {docID ? <Outlet />:<div><PromptMessage/></div>}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
