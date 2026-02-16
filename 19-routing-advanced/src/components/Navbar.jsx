import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between h-[10%] items-center px-5 py-4 bg-cyan-700'>
      <h2 className='font-bold text-2xl'>Dhiraj Kumar</h2>
      <div className='flex gap-10' >
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>  
      </div>
    </div>
  )  
}

export default Navbar
