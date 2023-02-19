import React ,{useState}from "react";
import { setChannel } from "../../resources/Firebase/firebaseconfig";
export const AddChannelField = ({ stateHandler }) => {

const [roomname,setroomname]  = useState("");

const handleChange= (e)=>{
  const {value } = e.target;
  setroomname(value);
}
  const handleSubmit = (e) => {
    setChannel(roomname);
    stateHandler();
  };
  return (
    <div className="absolute top-0 left-16  text-black">
      <form onSubmit={handleSubmit} className="flex bg-hovergrey">
        <input type={"text"} placeholder="Enter the Room name" value={roomname} name={"roomname"} onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
