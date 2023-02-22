import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { Search } from "@mui/icons-material";
export const Searchbar = () => {
  const [formvalue, setformvalue] = useState("");
  const { channels, setfilteredChannels } = useContext(UserContext);
  const handleChange = (event) => {
    const { value } = event.target;
    setformvalue(value);

    const searcharray = channels.filter((item) => {
      return item.data.roomname.toLowerCase().includes(value);
    });

    setfilteredChannels(searcharray);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit}
        className="w-100p rounded-md bg-white border-gray-400 border mx-2 flex justify-between  shadow-md"
      >
        <input
          onChange={handleChange}
          value={formvalue}
          name="formvalue"
          className="p-2 bg-white rounded-left outline-none max-w-70p  min-w-70p z-10 text-black"
          autoComplete="off"
          placeholder="Search Channel..."
        />
        <button className="bg-white p-2 rounded-right max-w-30p  min-w-30p  flex justify-end z-10 text-black">
          <Search />
        </button>
       
      </form>
    </>
  );
};
