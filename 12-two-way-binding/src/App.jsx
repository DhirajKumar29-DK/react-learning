import React from 'react'
import { useState } from 'react';

const App = () => {

 const[title, setTitle] = useState("")

  const formSubmit = (e) =>{
    e.preventDefault();
    console.log("form submitted by" ,title);   
    
    setTitle("")
  }
  
  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e)
      }}>
        <input type="text" 
        placeholder='Enter Your Name'
        value={title}
        onChange={ (e) =>{
          // console.log(setTitle(e.target.value));
          setTitle(e.target.value);
          
          
        }
      }
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
