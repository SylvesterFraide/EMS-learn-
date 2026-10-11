import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../Context/SidebarContext';
import { UserContext } from '../../Context/useContext';

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
    updateEmployee(parseInt(no) , id, name, gender, station, dateJoined, salary);
    navigate("/admin-employees");
  };
  return (
    <div>EditEmployee</div>
  )
}

export default EditEmployee;