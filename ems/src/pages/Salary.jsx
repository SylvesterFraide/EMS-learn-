import React from 'react'
import { SidebarContext } from '../Context/SidebarContext';
import { useContext } from 'react';

const Salary = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`h-[92vh] text-3xl uppercase p-5 mt-13 bg-gray-100 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
      SALARY
    </div>
  )
}

export default Salary