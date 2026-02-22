import React from "react";
import { List } from "../CRUD_LEARN/Data";

const Crude = () => {
  return (
    <div className="bg-gray-300 flex flex-col h-screen justify-center items-center">
      <h2 className="text-3xl font-bold uppercase italic text-center text-green-700 py-6 ">Crud Operations</h2>
      <button className="bg-blue-700 hover:bg-blue-500 text-2xl ml-80 text-white px-4 py-3 rounded mb-4">+</button>
      <table className="min-w-2/4 bg-white border border-red-300 mx-auto">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-400 py-3">Name</th>
            <th className="border border-gray-400 py-3">Age</th>
            <th className="border border-gray-400 py-3">Gender</th>
            <th className="border border-gray-400 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {List.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 px-4 py-2">{item.name}</td>
              <td className="border border-gray-400 px-4 py-2">{item.age}</td>
              <td className="border border-gray-400 px-4 py-2">{item.gender}</td>
              <td className="space-x-4 border border-gray-400 px-12 py-2">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-2 py-1 rounded">Update</button>
                <button className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crude;