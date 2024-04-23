import React from 'react'


export const Navbar = () => {
  return (
    <div className='py-10 px-6'>
      <div className='flex justify-between'>
      <div>
      <h1 className='font-Inter font-medium text-[20px] px-6 py-3'>Site name</h1>
      </div>
      <div className='flex flex-raw justify-between gap-6'>
        <ul className='flex flex-raw justify-between gap-6 mt-1'>
          <li className='font-Inter font-medium text-[20px] px-6 py-3'>Page</li>
          <li className='font-Inter font-medium text-[20px] px-6 py-3'>Page</li>
          <li className='font-Inter font-medium text-[20px] px-6 py-3'>Page</li>
        </ul>
        <div >
          <button className='bg-blue-800 font-Inter font-medium text-[20px] rounded-md px-6 py-3'>Button</button>
        </div>
      </div>
      </div>
    </div>
  )
}

