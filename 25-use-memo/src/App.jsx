import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0)

  function expensiveTask(num){
    console.log("inside expensiveTask")
    for(let i=0; i<=1000000000; i++) {}
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  

  return (
   <div>

    <h1>Count: {count}</h1>
    <br />
    <button onClick={(() =>{
      setCount(count+1)
    })}>
      Increment
    </button>

    <br />
    <h1>Double: {doubleValue}</h1>
    <input 
     type="number"
     placeholder='EnterNumber'
     value={input}
     onChange={(e) => {
      setInput(e.target.value)
     }}
     />
    
   </div>
  )
}

export default App
