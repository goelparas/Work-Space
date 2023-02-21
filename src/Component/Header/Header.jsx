import { Avatar} from "@mui/material";

import { Help } from "@mui/icons-material";
import React from "react";

import { SearchBar } from "../SearchBar/SearchBar";
export const Header = () => {
  return (
    <div className="header  flex w-full flex-row justify-between bg-primaryviolet h-100p items-center p-1 shadow-lg">
      <div className="header_search w-50p text-left sm:hidden md:block">
        <SearchBar />
      </div>
      <div className="header_right flex items-center gap-2 w-50p justify-end p-4 flex-grow">
        <Help sx={{ color: "white" }} />
        <Avatar
          alt="Paras"
          src={localStorage.getItem("photourl")}
          sx={{ boxShadow: "2px 2px 2px black" }}
        />
      </div>
    </div>
  );
};
