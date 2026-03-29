import React from "react";
import { tableData, tableColumns } from "./data";
import * as RTD from "react-data-table-component";

const Table = () => {
  const DataTable = RTD.default;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">Table</h1>
      <div className="w-3/4">
        <DataTable.default columns={tableColumns} data={tableData}  
        fixedHeader
        pagination
        />
      </div>
    </div>
  );
};

export default Table;
