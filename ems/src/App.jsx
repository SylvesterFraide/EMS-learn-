import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import Department from "./pages/Department";
import Leaves from "./pages/Leaves";
import Salary from "./pages/Salary";
import Setting from "./pages/Setting";
import AdminSidebar from "./components/Dashboard/AdminSidebar";
import NavBar from "./components/Dashboard/NavBar";
import AddDepartmentForm from './components/Dashboard/addDepartmentForm';

function App() {
  return (
    <BrowserRouter>
      <AdminSidebar />
      <div className=" ml-64">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-employees" element={<Employees />} />
        <Route path="/admin-departments" element={<Department />} />
        <Route path="/addDepartment" element={<AddDepartmentForm />} />
        <Route path="/admin-leaves" element={<Leaves />} />
        <Route path="/admin-salary" element={<Salary />} />
        <Route path="/admin-setting" element={<Setting />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </BrowserRouter>
  );
}
export default App;