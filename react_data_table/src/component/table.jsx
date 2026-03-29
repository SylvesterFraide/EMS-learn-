import React, { useState } from "react";
import { tableData, tableColumns } from "./data";
import * as RTD from "react-data-table-component";

const Table = () => {
  const DataTable = RTD.default;

  const [filteredData, setFilteredData] = useState(tableData);

  const handleChange = (e) => {
    const newData = filteredData.filter((item) => 
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(newData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">Employees</h1>
      <div className="w-3/4">
        <div className="my-4 ">
          <form action="" className="flex items-center justify-between">
            <input
              onChange={handleChange}
              type="text"
              placeholder="search by name..."
              className="border px-4 py-2 rounded-md outline-none "
            />

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold"
            >
              <span>+</span> add member
            </button>
          </form>
        </div>
        <DataTable.default
          columns={tableColumns}
          data={filteredData}
          fixedHeader
          pagination
        />
      </div>
    </div>
  );
};

export default Table;
