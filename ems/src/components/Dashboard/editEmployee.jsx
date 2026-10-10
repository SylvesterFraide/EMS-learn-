import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../Context/SidebarContext';
import { UserContext } from '../../Context/useContext';

const EditEmployee = () => {

     const { employee, updateEmployee } = useContext(UserContext);
  const { isOpen } = useContext(SidebarContext);
  const { id } = useParams();
  const employeeName = employee.find((item) => item.id === parseInt(id));
  const [name, setName] = useState(employeeName?.name || "");
  const [description, setDescription] = useState(employeeName?.description || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (employeeName) {
      setName(employeeName.name);
      setDescription(employeeName.description);
    }
  }, [employeeName]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateEmployee(parseInt(id), name, description);
    navigate("/admin-employees");
  };
  return (
    <div>EditEmployee</div>
  )
}

export default EditEmployee;