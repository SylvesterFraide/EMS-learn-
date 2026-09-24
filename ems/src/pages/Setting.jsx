import React from 'react'
import { useContext } from 'react';
import { SidebarContext } from '../Context/SidebarContext';

const Setting = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div className={`h-[92vh] text-3xl uppercase p-5 mt-13 bg-gray-100 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
      SETTING
    </div>
  )
}

export default Setting;