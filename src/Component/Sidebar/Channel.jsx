import React, { useState } from 'react'
import { Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AddChannelField } from '../AddChannelField/AddChannelField';
export const CreateChannel = ({ Icon, title ,id ,   allowInputField}) => {
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
        <div className=' channel_container relative flex justify-evenly'>
        <div  className='flex gap-2 p-2  border-y-black justify-start hover:cursor-pointer hover:bg-hovergrey ' onClick={handleClick}>
            {Icon && <Icon />}
            {Icon ? (<h2>{title}</h2>):(<h3>#{title}</h3>)}
        
        </div>
        {
            allowInputField&&inputButton?(<AddChannelField stateHandler={handlebutton}/>):(<></>)
        }
        </div>
    )
}
