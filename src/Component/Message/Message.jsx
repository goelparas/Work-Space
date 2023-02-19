import React from "react";
export const Message = ({ user, message, icon }) => {
  
  const iscorrectUser = ()=>{
    if(user===localStorage.getItem("displayname"))
    {
     return true 
    }
    return false;

  }
  
  return (
    
    <div className="w-100p flex flex-row"  style={{justifyContent:iscorrectUser()?"end":"start"}}>
    <div className=" border max-w-30p  p-2 shadow-md">
      <div className=" flex gap-2 ">
      <div className="flex justify-start gap-2 w-100p">
      <img src={icon} alt={user}  className="rounded-full sm:min-w-5p  sm:max-w-40" />
         <p className="text-violet-500">{user}</p></div>
      </div>
      <div className="flex justify">
        <p className="text-black font-extralight">{message}</p>
      </div>
    </div>
    </div>
  );
};
