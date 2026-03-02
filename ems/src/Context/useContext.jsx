import { createContext, useState } from "react";
import { DepartmentData } from '../components/Data/Data';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState(DepartmentData);


  const contextValue = { user, setUser };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
