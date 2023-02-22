import React, { useState } from "react";
import { setChannel } from "../../resources/Firebase/firebaseconfig";
export const Addchannel = ({ stateHandler }) => {
  const [roomname, setroomname] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setroomname(value);
  };
  const handleSubmit = (e) => {
    if(roomname!=="")
    {

      setChannel(roomname);
    }
    stateHandler();
  };
  return (
    <div className="absolute top-8  left-16 text-black z-30">
      <form onSubmit={handleSubmit} className="flex  p-2 rounded-lg border bg-white  ">
        <input
        className="outline-none "
          type={"text"}
          placeholder="Enter the Room name"
          value={roomname}
          name={"roomname"}
          maxLength="10"
          onChange={handleChange}
          required
          autoComplete="off"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
