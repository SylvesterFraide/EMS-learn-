import { createContext, useState } from "react";
import { DepartmentData } from "../components/Data/Data";
import { EmployeesData } from "../components/Data/Data";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [department, setDepartment] = useState(DepartmentData);
  const [employees, setEmployees] = useState(EmployeesData);

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
    employees,
    // addEmployee,
    // deleteEmployee,
    // updateEmployee,
  };

  // const [data, setData] = useState(List);
  
  //   const addUser = (id, name, age, gender) => {
  //     const newData = {
  //       id,
  //       name,
  //       age,
  //       gender,
  //     };
  //     setData([...data, newData]);
  //   };
  
  //   const deleteUser = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };
  
  //   const updateUser = (id, name, age, gender) => {
  //     const updatedData = data.map((item) =>
  //       item.id === id ? { ...item, id, name, age, gender } : item,
  //     );
  //     setData(updatedData);
  //   };
  

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;