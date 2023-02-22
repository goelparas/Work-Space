import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { checkLoginStatus } from "../../store/Userstore";
import {Promptmessage} from "../Promptmessage/Promptmessage";

export const Home = () => {
  const navigate = useNavigate();
  const { docID } = useParams();
  useEffect(() => {
    if (!checkLoginStatus()) {
      navigate("/login");
    }
  });

  return (
    <div className="flex flex-col  w-100p  fixed h-100p">
      {checkLoginStatus() ? (
        <>
          <div className="header__container  min-h-10p  ">
            <Header />
          </div>
          <div className="Chatbox__container  flex flex-row min-h-90p">
            <Sidebar />
            {docID ? <Outlet />:<Promptmessage/>}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
