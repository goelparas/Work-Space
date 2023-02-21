import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import { AddChannelField } from "../AddChannelField/AddChannelField";
import { removeChannel } from "../../resources/Firebase/firebaseconfig";
export const CreateChannel = ({
  Icon,
  title,
  id,
  allowInputField,
  changeField,
}) => {
  const [inputButton, setinputButton] = useState(false);

  const navigate = useNavigate();


  const handleClick = () => {
    if (id != undefined) {
      navigate(`/rooms/${id}`);
    }
    setinputButton(!inputButton);
    if (changeField) {
      changeField(title);
    }
  };
  const handlebutton = () => {
    setinputButton(!inputButton);
  };
  const deleteChannel = () => {
    removeChannel(id);
  };

  return (
    <div className=" channel_container relative flex justify-center  w-100p ">
      <div
        className="flex gap-2 p-2  border-y-black  hover:cursor-pointer hover:shadow-xl min-w-100p   md:justify-center rounded-xl shadow-sm"
        onClick={handleClick}
      >
        <div className="flex justify-center w-100p">
         
          {Icon && <Icon />}
          {Icon ? (
            <h2 className="font-thin text-xs">{title}</h2>
          ) : (
            <h3 className="font-thin  sm:text-xs "># {title}</h3>
          )}
        </div >
        {!allowInputField ? (
          <div className="flex justify-end w-50p">
            <button onClick={deleteChannel}>
              <DeleteOutlineIcon sx={{ fontSize: "20px" }} />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {allowInputField && inputButton ? (
        <AddChannelField stateHandler={handlebutton} />
      ) : (
        <></>
      )}
    </div>
  );
};
