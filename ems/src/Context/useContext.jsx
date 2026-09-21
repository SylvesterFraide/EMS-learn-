import { createContext, useState } from "react";
import { DepartmentData } from "../components/Data/Data";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [department, setDepartment] = useState(DepartmentData);

  const addDepartment = (Department, Description) => {
    const newDepartment = {
      id: department.length > 0 ? Math.max(...department.map(d => d.id)) + 1 : 1,
      Department,
      Description,
    };
    setDepartment([...department, newDepartment]);
  };

  const deleteDepartment = (id) => {
    setDepartment(department.filter((item) => item.id !== id));
  };

  const updateDepartment = (id, Department, Description) => {
    const newData = department.map((item) =>
      item.id === id ? { ...item, Department, Description } : item
    );
    setDepartment(newData);
  };

  const contextValue = {
    department,
    addDepartment,
    deleteDepartment,
    updateDepartment,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;