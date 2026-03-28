import { createContext, useState, useEffect } from "react";
import { DepartmentData } from "../components/Data/Data";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // Load from localStorage or fallback to default data
  const [department, setDepartment] = useState(() => {
    const savedData = localStorage.getItem("departments");
    return savedData ? JSON.parse(savedData) : DepartmentData;
  });

  const addDepartment = (Department, Description) => {
    const newDepartment = {
      id: department.length + 1,
      Department,
      Description,
    };
    setDepartment([...department, newDepartment]);
  };

  // Save to localStorage whenever department changes
  useEffect(() => {
    localStorage.setItem("departments", JSON.stringify(department));
  }, [department]);

  const deleteDepartment = (id) => {
    setDepartment(department.filter((item) => item.id !== id));
  };

  //   const updateUser = (id, name, age, gender) => {
  //   const updatedData = data.map((item) =>
  //     item.id === id ? { ...item, id, name, age, gender } : item,
  //   );
  //   setData(updatedData);
  // };

  const updateDepartment = (Department, Description) => {
    const newData = department.map((item) =>
      item.id === id ? { ...item, Department, Description } : item,
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
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
