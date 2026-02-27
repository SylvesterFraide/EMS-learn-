import { createContext, useState } from "react";
import { List } from "../Data";

export const DataContext = createContext(List);

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(List);

  const addUser = (name, age, gender) => {
    const newData = {
      id: Date.now(),
      name,
      age,
      gender,
    };
    setData([...data, newData]);
  };

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const contextvalue = { addUser, deleteUser, data };

  return (
    <DataContext.Provider value={contextvalue}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
