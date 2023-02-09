import { FiberManualRecord } from '@mui/icons-material'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import React, { useEffect, useState } from 'react'
import { SidebarIcons } from '../../resources/Icons/SidebarIcons';
import { SidebarOption } from './SidebarOption';
import { ExpandMoreSharp } from '@mui/icons-material';
import { getChannels } from '../../resources/Firebase/firebaseconfig';
import { Add } from '@mui/icons-material';
export const Sidebar = () => {
  const [channels, setchannels] = useState([]);

  useEffect(() => {
    getChannels(setchannels);


  }, [])
  


  return (
    <div className='sidebar  flex-col bg-primarypurple w-92 h-screen'>

      <div className="sidebar__header flex lg: gap-6 py-6">
        <div className='header__info '>
          <h2>Paras's Channel</h2>
          <h3><FiberManualRecord />Paras</h3>
        </div>
        <div className='header__create'>
          <CreateRoundedIcon />
        </div>

      </div>
      <div className="sidebar_channels flex-col items-center">
        {
          SidebarIcons.map((item,index) => {
            return <SidebarOption Icon={item.Icon} title={item.title} key={index} />

          })
        }
        <SidebarOption Icon={ExpandMoreSharp} title={"Channels"} />
        <SidebarOption Icon={Add} title={"Add channels"} addChannels={true}/>
        {
                channels.map((channel)=>{
                  return <SidebarOption  title={channel.data.roomname} id={channel.id} key={channel.id}/>
                })
        }

      </div>
    </div>
  )
}
