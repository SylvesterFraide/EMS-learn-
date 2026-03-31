import React from "react";
import Let from "./Component/let";
import Crud from "./Component/crud/crud";
import Crude from "./Component/CRUD_LEARN/Crude";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Component/CRUD_LEARN/add";
import EditUser from "./Component/CRUD_LEARN/editUser";
import ViewUser from "./Component/CRUD_LEARN/viewUser";
import ArrayMethods from "./Component/Arrays/arrayMethods";



function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* <Route path="/" element={<Crude />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/view/:id" element={<ViewUser />} /> */}
        {/* <Route path="/" element={<Crud />} /> */}
        <Route path="/" element={<ArrayMethods />} />
        {/* <Route path="/let" element={<Let />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
