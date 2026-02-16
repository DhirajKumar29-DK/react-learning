import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='font-bold text-sm ' to='/product/men'>Mens</Link>
        <Link className='font-bold text-sm ' to='/product/women'>Womens</Link>
        <Link className='font-bold text-sm ' to='/product/kids'>Kids</Link>
      </div>
    
     <Outlet />
    </div>
  )
}

export default Product
