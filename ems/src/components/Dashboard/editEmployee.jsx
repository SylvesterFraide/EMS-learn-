import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarContext } from "../../Context/SidebarContext";
import { UserContext } from "../../Context/useContext";

const EditEmployee = () => {
  const { employees, updateEmployee } = useContext(UserContext);
  const { isOpen } = useContext(SidebarContext);
  const { no } = useParams();
  const employeeName = employees.find((item) => item.no === parseInt(no));

  const [id, setId] = useState(employeeName?.id || "");
  const [name, setName] = useState(employeeName?.name || "");
  const [gender, setGender] = useState(employeeName?.gender || "");
  const [station, setStation] = useState(employeeName?.station || "");
  const [dateJoined, setDateJoined] = useState(employeeName?.dateJoined || "");
  const [salary, setSalary] = useState(employeeName?.salary || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (employeeName) {
      setId(employeeName.id);
      setName(employeeName.name);
      setGender(employeeName.gender);
      setStation(employeeName.station);
      setDateJoined(employeeName.dateJoined);
      setSalary(employeeName.salary);
    }
  }, [employeeName]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee(parseInt(no), id, name, gender, station, dateJoined, salary);
    navigate("/admin-employees");
  };

  return (
    <div className={`bg-gray-100 min-h-screen flex justify-center p-4 md:pt-[10vh] pt-20 transition-all duration-300
      ${isOpen? "md:ml-64 ml-0" : "md:ml-16 ml-0"}`}>

      <form onSubmit={handleUpdate} className="bg-white p-5 md:p-8 w-full max-w-2xl rounded-xl shadow-lg h-fit mb-10">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-2xl font-bold">Update Employee</h1>
          <button type="button" onClick={() => navigate("/admin-employees")} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-1.5 rounded-lg font-semibold text-sm md:text-base">
            ← Back
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <label className="font-semibold text-sm">ID</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Id" required />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-sm">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Name" required />
          </div>

          <div>
            <label className="font-semibold text-sm">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-sm">Station</label>
            <input type="text" value={station} onChange={(e) => setStation(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Station" required />
          </div>

          <div>
            <label className="font-semibold text-sm">Date Joined</label>
            <input type="date" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" required />
          </div>

          <div>
            <label className="font-semibold text-sm">Salary</label>
            <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="border border-gray-300 p-2.5 w-full rounded-lg mt-1 outline-none focus:ring-2 focus:ring-teal-500" placeholder="Salary" required />
          </div>
        </div>

        <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold p-3 rounded-lg mt-8 w-full">UPDATE EMPLOYEE</button>
      </form>
    </div>
  );
};

export default EditEmployee;