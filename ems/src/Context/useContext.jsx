import { createContext, useState } from "react";
import { DepartmentData } from "../components/Data/Data";
import { EmployeesData } from "../components/Data/Data";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [department, setDepartment] = useState(DepartmentData);
  const [employees, setEmployees] = useState(EmployeesData);

  const addDepartment = (name, description) => {
    const newDepartment = {
      id: department.length > 0 ? Math.max(...department.map(d => d.id)) + 1 : 1,
      name,
      description,
    };
    setDepartment([...department, newDepartment]);
  };

  const deleteDepartment = (id) => {
    setDepartment(department.filter((item) => item.id !== id));
  };

  const updateDepartment = (id, name, description) => {
    const newData = department.map((item) =>
      item.id === id ? { ...item, name, description } : item
    );
    setDepartment(newData);
  };

   const addEmployee = (id, name, gender, station, dateJoined, salary) => {
    const newEmployee = {
      no: employees.length > 0 ? Math.max(...employees.map(e => e.no)) + 1 : 1,
      id,
      name,
      gender,
      station,
      dateJoined,
      salary,
    };
    setEmployees([...employees, newEmployee]);
  };

  // const deleteEmployee = (id) => {
  //   setEmployees(employees.filter((item) => item.id !== id));
  // };

  // const updateEmployee = (id, name, gender, station, dateJoined, salary) => {
  //   const newData = employees.map((item) =>
  //     item.id === id ? { ...item, name, gender, station, dateJoined, salary } : item
  //   );
  //   setEmployees(newData);
  // };

  const contextValue = {
    department,
    addDepartment,
    deleteDepartment,
    updateDepartment,
    employees,
    addEmployee,
    // deleteEmployee,
    // updateEmployee,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;