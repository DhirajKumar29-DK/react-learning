import React from 'react'

const Navbar = (props) => {
    console.log(props);

    const changeTheme =() =>{
        props.setTheme('Dark')
    }
    
  return (
    <div>
        {/* <p>{p.theme}</p> */}
      <button onClick={()=>{
        changeTheme()
      }}>Change Theme</button>
    </div>
  )
}

export default Navbar
