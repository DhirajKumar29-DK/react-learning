import React from 'react'

const App = () => {
  const formSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);    
  }
  
  return (
    <div>
      <form onSubmit={(e) =>{
        formSubmit(e)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
