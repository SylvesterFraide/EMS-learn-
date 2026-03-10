import { createContext } from "react";
import { Data } from "../Component/Data";

export const userContext = createContext();

export const UserProvider = ({ children }) => {

    const contextValue = { Data };
  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  );
};

