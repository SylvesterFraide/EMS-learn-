import React, { useState } from 'react'

const Crud = () => {

   const List = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 20},
        {id: 3, name: "Item 3", price: 30}
    ]
    
    const [list, setlist] = useState(List);
    
  return (
    <div className='flex items-center justify-center h-screen'>
      <table className='w-1/2'>
        <thead className='bg-gray-100'>
          <tr className='text-left'>
            <th className='px-4 py-2'>ID</th>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Price</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {list.map(item => (
            <tr key={item.id}>
              <td className='px-4 py-2'>{item.id}</td>
              <td className='px-4 py-2'>{item.name}</td>
              <td className='px-4 py-2'>{item.price}</td>
              <td className='flex space-x-2 px-4 py-2'>
                <button className='text-blue-500 hover:underline'>edit</button>
                <button className='text-red-500 hover:underline'>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crud