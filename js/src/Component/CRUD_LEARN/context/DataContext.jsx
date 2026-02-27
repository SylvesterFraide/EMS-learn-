import { createContext, useState } from "react";
import { List } from "../Data";

export const DataContext = createContext(List);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(List);

  const addUser = (id, name, age, gender) => {
    const newData = {
      id,
      name,
      age,
      gender,
    };
    setData([...data, newData]);
  };

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const updateUser = (id, name, age, gender) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, id, name, age, gender } : item,
    );
    setData(updatedData);
  };

  const contextvalue = { addUser, deleteUser, updateUser, data };

  return (
    <DataContext.Provider value={contextvalue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
