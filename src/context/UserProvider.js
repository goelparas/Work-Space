import React, { useState, createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [channels, setchannels] = useState([]);
  const [filterChannels, setfilteredChannels] = useState([]);
  const [toggle, setToggle] = useState(false);
  const value = {
    channels,
    setchannels,
    filterChannels,
    setfilteredChannels,
    toggle,
    setToggle,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
