import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMessages,
  addMessages,
} from "../../resources/Firebase/firebaseconfig";
import { Message } from "../Message/Message";
import { Button } from "@mui/material";

export const ChatBox = () => {
  const defaultform = {
    message: "",
  };
  const [formvalue, setformvalue] = useState(defaultform);
  const { message } = formvalue;
  const { docID } = useParams();
  useEffect(() => {
    if (docID) {
      getMessages(docID, setMessages);
    }
  }, [docID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessages(docID, message);
    setformvalue(defaultform);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };
  const [messages, setMessages] = useState([]);

  return (
    <>
      <div className="flex flex-col w-80p  justify-between  flex-grow ">
        <div className="messages__container border min-h-90p overflow-y-scroll overflow-x-hidden flex flex-col gap-4 items-end p-6 tall:min-h-94p">
          {messages.map((item,index) => {
            return (
              <Message
                user={item.user}
                message={item.message}
                icon={item.icon}
                key={index}
              />
            );
          })}
        </div>

        <div className="form__container w-100p min-h-10p tall:min-h-6p">
          <form onSubmit={handleSubmit} className="flex justify-between min-h-100p"  sx={{border:"1px 0px  solid black" }}>
            <input
              className="w-90p border p-4 outline-none"
              type="text"
              value={message}
              name={"message"}
              onChange={handleChange}
              placeholder="Send Message"
              autoComplete="off"
              required
             
            />
            <Button type="submit" className="w-10p rounded-right" sx={{backgroundColor:"#8F00FF",color:"white",borderRadius:"none"}} >
              Send
            </Button>
          </form>
        </div>
      </div>
    </>
  )
};
