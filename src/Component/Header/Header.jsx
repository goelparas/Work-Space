import { Avatar } from "@mui/material";
import { Help, ToggleOn, ToggleOff } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserContext } from "../../context/UserProvider";
import image from "../../resources/Icons/Office.svg";
export const Header = () => {
  const { toggle, setToggle } = useContext(UserContext);
  const [detail, setdetail] = useState(false);

  const sidebarHandler = () => {
    setToggle(!toggle);
  };
  const detailHandler = () => {
    setdetail(!detail);
  };
  return (
    <div className="header  flex w-full flex-row justify-between bg-primaryviolet h-100p items-center p-1 shadow-lg">
      <div className="header_search w-50p text-left sm:hidden md:block">
        <div className="max-w-100p">
          <SearchBar />
        </div>
      </div>

      <div className="md:hidden sm:block  p-4 ">
        <button onClick={sidebarHandler}>
          {toggle ? (
            <ToggleOff sx={{ color: "white", fontSize: "50px" }} />
          ) : (
            <ToggleOn sx={{ color: "white", fontSize: "50px" }} />
          )}
        </button>
      </div>
      <div className="header_right flex items-center gap-2 w-50p justify-end p-4 flex-grow relative">
        <button onClick={detailHandler}>
          <Help sx={{ color: "white" }} />
        </button>
        <Avatar
          alt="Paras"
          src={localStorage.getItem("photourl")}
          sx={{ boxShadow: "2px 2px 2px black" }}
        />
        {detail ? (
          <div className="w-200 h-200 absolute top-16 border shadow-2xl flex flex-col justify-evenly items-center rounded-2xl bg-white">
            <img src={image} alt="Image" className="w-70p" />
            <p className="font-thin text-xs p-4">
              "Workspace: Because who needs actual human interaction when you
              can communicate through a screen with your co-workers all day
              long?" 
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
