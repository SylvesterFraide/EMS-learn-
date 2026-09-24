import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext';

const Leaves = () => {
  const { isOpen } = useContext(SidebarContext);


  return (
    <div className={`h-[92vh] text-3xl uppercase p-5 mt-13 bg-gray-100 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
      LEAVES APPLIED
    </div>
  )
}

export default Leaves