import React, { useState, createContext } from "react";

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [login, setlogin] = useState(undefined);
  const value = { login, setlogin };

  return (
    <UserContext.Provider
      value={value}
      children={children}
    ></UserContext.Provider>
  );
};
