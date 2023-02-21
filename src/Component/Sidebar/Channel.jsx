import React, { useState } from 'react'
import { Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AddChannelField } from '../AddChannelField/AddChannelField';
export const CreateChannel = ({ Icon, title ,id ,   allowInputField , changeField}) => {
    const [inputButton,  setinputButton] = useState(false);

    const navigate = useNavigate();

    const handleClick=()=>{
        if(id!=undefined)
        {
            navigate(`/rooms/${id}`)
        }
        setinputButton(!inputButton);
        if(changeField)
        {

            changeField(title);
        }

    }
    const handlebutton= ()=>{
        setinputButton(!inputButton);
    }
    
    

return (
        <div className=' channel_container relative flex justify-center  '>
        <div  className='flex gap-2 p-3  border-y-black  hover:cursor-pointer hover:shadow-md min-w-100p  sm:justify-center rounded-xl shadow-sm' onClick={handleClick}>
            {Icon && <Icon />}
            {Icon ? (<h2  className="font-normal text-sm" >{title}</h2>):(<h3 className="font-normal  md:text-xs lg:text-sm"># {title}</h3>)}
        
        </div>
        {
            allowInputField&&inputButton?(<AddChannelField stateHandler={handlebutton}/>):(<></>)
        }
        </div>
    )
}
