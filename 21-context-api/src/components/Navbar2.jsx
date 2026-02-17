import React, { useContext } from 'react'
import { PostDataContext } from './context/ThemeContext'

const Navbar2 = (props) => {

   const data = useContext(PostDataContext);
    
  return (
    <div className='nav2'>
       <h4>Home</h4>
       <h4>About</h4>
       <h4>{data}</h4>
       <h4>Services</h4>
    </div>
  )
}

export default Navbar2
