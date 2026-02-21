import React, { useCallback, useState } from 'react'
import ChildComponent from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

const App = () => {
//  const [count ,setCount] = useState(0);

//  const handleClick = useCallback((() =>{
//   setCount(count+1)
//  }), [count]);

  return (
    <div>

      <ExpensiveComponent />
      {/* <h1>Count: {count}</h1>
      <button onClick={()=>{
        handleClick()
      }}>Increment</button>
      <br />
      <br />

      <div>
        <ChildComponent 
        buttonName="Click Me" 
        handleClick={handleClick}
        />
      </div> */}
    </div>
  )
}

export default App
