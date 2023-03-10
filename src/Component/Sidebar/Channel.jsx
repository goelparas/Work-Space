import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import { Addchannel } from "../Addchannel/Addchannel";
import { removeChannel } from "../../resources/Firebase/firebaseconfig";
export const CreateChannel = ({
  Icon,
  title,
  id,
  allowInputField,
  changeField,
}) => {
  const [inputButton, setinputButton] = useState(false);
  const [isdeleteClicked, setDeleteclicked] = useState(false);
  const navigate = useNavigate();


  const handleClick = () => {
    if (id !== undefined &&!isdeleteClicked) {
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
    setDeleteclicked(true);
    if(isdeleteClicked){
      removeChannel(id);
      navigate("/");
    }
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
            <h2 className="font-light text-xs sm:text-white lg:text-black lg:text-sm">{title}</h2>
          ) : (
            <h3 className=" font-light  sm:text-xs sm:text-white lg:text-black lg:text-sm"># {title}</h3>
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
        <Addchannel stateHandler={handlebutton} />
      ) : (
        <></>
      )}
    </div>
  );
};
