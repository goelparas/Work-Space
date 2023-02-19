import { FiberManualRecord } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import React, { useEffect, useState } from "react";
import { SidebarIcons } from "../../resources/Icons/SidebarIcons";
import { ExpandMoreSharp } from "@mui/icons-material";
import { CreateChannel } from "./Channel";
import { getChannels } from "../../resources/Firebase/firebaseconfig";
import { Add } from "@mui/icons-material";
export const SideBar = () => {
  const [channels, setchannels] = useState([]);

  useEffect(() => {
    getChannels(setchannels);
  }, []);

  return (
    <div className="sidebar  flex-col  border  justify-between  md:max-w-30p lg:max-w-20p">
      <div className="sidebar__header flex-col  gap-6 justify-center items-center py-6 h-20p border border-black shadow-md">
        <div className="flex flex-row  gap-4 justify-evenly">
          <div className="header__info ">
            <h1 className=" text-2xl">Town'sWorkspace</h1>
            <h3>
              <FiberManualRecord />
              Paras
            </h3>
          </div>
          <div className="header__create relative">
            <CreateRoundedIcon />
          </div>
        </div>
        <div className="addchannel__container flex-col items-center justify-center">
          <CreateChannel
            Icon={Add}
            title={"Add channels"}
            allowInputField={true}
          />{" "}
        </div>
      </div>

      <div className="scrollbar__container flex-col items-center h-60p overflow-scroll">
        {channels.map((channel) => {
          return (
            <CreateChannel
              title={channel.data.roomname}
              id={channel.id}
              key={channel.id}
            />
          );
        })}
      </div>
      <div className="footer   h-20p shadow-md p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa animi velit!
      </div>
    </div>
  );
};
