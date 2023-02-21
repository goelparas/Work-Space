import { FiberManualRecord } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import PhoneSharpIcon from "@mui/icons-material/PhoneSharp";
import { CreateChannel } from "./Channel";
import { getChannels } from "../../resources/Firebase/firebaseconfig";
import { Add } from "@mui/icons-material";
import { SearchBar } from "../SearchBar/SearchBar";
import { display } from "@mui/system";

export const SideBar = () => {
  const { setchannels, filterChannels, setfilteredChannels, toggle } =
    useContext(UserContext);

  const [currentChannelfield, setChannelfield] = useState("Select Channel");
  useEffect(() => {
    getChannels(setchannels);
    getChannels(setfilteredChannels);
  }, []);

  return (
    <>
      <div className="sidebar  flex-col    justify-between  md:max-w-30p md:min-w-30p md:min-h-30  lg:max-w-20p lg:min-w-20p sm:hidden md:block ">
        <div className="sidebar__header  flex flex-col  gap-4 justify-center items-center py-6  shadow-md  rounded-bottom bg-primaryviolet text-white  min-h-20p max-h-20p  tall:max-h-15p tall:min-h-15p ">
          <div className="flex flex-row  gap-4 justify-evenly w-100p">
            <div className="header__info ">
              <h1 className="  md:text-md lg:text-xl font-normal">WorkSpace</h1>
              <h3 className="flex justify-center">
                <FiberManualRecord sx={{ color: "lightseagreen" }} />
                Paras
              </h3>
            </div>
            <div className="header__create relative">
              <CreateRoundedIcon />
            </div>
          </div>
          <div className="addchannel__container flex flex-row items-center justify-center w-100p">
            <CreateChannel
              Icon={Add}
              title={"Add channels"}
              allowInputField={true}
            />
          </div>
        </div>

        <div className="scrollbar__container flex-col items-center  overflow-scroll max-h-70p min-h-70p tall:max-h-79p tall:min-h-79p">
          {filterChannels.map((channel) => {
            return (
              <CreateChannel
                title={channel.data.roomname}
                id={channel.id}
                key={channel.id}
                changeField={setChannelfield}
              />
            );
          })}
        </div>
        <div className="footer  flex gap-2 justify-evenly items-center rounded-top shadow-top  bg-primaryviolet text-white  sm:p-1   min-h-10p  max-h-10p w-100p tall:min-h-7p">
          <div className="text-center  sm:80p lg:w-70p ">
            <h3 className="font-normal  md:text-sm lg:text-md ">
              {currentChannelfield}
            </h3>
          </div>
          <div className="text-center sm:20p lg:w-30p">
            <PhoneSharpIcon />
          </div>
        </div>
      </div>

      <div className="fixed sm:block md:w-0   top-10p min-h-730 max-h-730  w-40p  shadow-right bg-transparent " style={{ display: toggle ? "none" : "block"  }}>
        <div
          className="sidebar  flex-col justify-between w-100p h-100p   md:hidden" 
         
        >
          <div className="sidebar__header  flex flex-col  gap-4 justify-center items-center py-6  shadow-md   bg-primaryviolet text-white  w-100p  h-150 rounded-botom">
           
              
                <SearchBar />
           
            <div className="addchannel__container flex-col items-center justify-center w-100p">
              <CreateChannel
                Icon={Add}
                title={"Add channels"}
                allowInputField={true}
              />
            </div>
          </div>
          <div className="scrollbar__container flex-col items-center   overflow-scroll max-h-600 min-h-600  tall:min-h-700 bg-primaryviolet w-100p scroll-m-0 ">
            {filterChannels.map((channel) => {
              return (
                <CreateChannel
                  title={channel.data.roomname}
                  id={channel.id}
                  key={channel.id}
                  changeField={setChannelfield}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
