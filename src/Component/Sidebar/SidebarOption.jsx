import React, { useState } from 'react'
import { Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { setChannel } from '../../resources/Firebase/firebaseconfig';
import { InputChannel } from '../InputChannels/InputChannel';
export const SidebarOption = ({ Icon, title ,id ,addChannels}) => {
    const [inputButton,  setinputButton] = useState(false);

    const navigate = useNavigate();

    const handleClick=()=>{
        if(id!=undefined)
        {
            navigate(`/rooms/${id}`)
        }
        setinputButton(!inputButton);

    }
    const handlebutton= ()=>{
        setinputButton(!inputButton);
    }
    
    

    return (
        <div className='relative'>
        <div  className='flex gap-2 p-2  border-y-black justify-start hover:cursor-pointer hover:bg-hovergrey ' onClick={handleClick}>
            {Icon && <Icon />}
            {Icon ? (<h2>{title}</h2>):(<h3>#{title}</h3>)}
        
        </div>
        {
            addChannels&&inputButton?(<InputChannel stateHandler={handlebutton}/>):(<></>)
        }
        </div>
    )
}
