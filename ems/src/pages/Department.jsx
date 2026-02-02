import React from 'react'
import { Link } from 'react-router-dom';

const Department = () => {
  return (
    <div className='ml-64 h-[92vh] p-5 bg-gray-100'>
      <h2 className='text-center font-bold text-3xl macondo-regular'>Manage Departments</h2>
      <form action="" className='flex justify-between py-6 px-10'>
        <input type="text" className='bg-white py-2 px-5 cursor-pointer rounded-lg shadow-xl outline-none border border-dotted border-teal-600' placeholder='Search by dep name' />
        <Link to="/addDepartment" className='flex items-center gap-2 bg-teal-600 font-semibold px-3 pt-1 rounded-md text-white'>
        <p className='text-2xl'>+</p>
        <p className='text-xl'>New Department</p>
        </Link>
      </form>
   </div>
  )
}

export default Department;