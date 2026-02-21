import React, { useEffect, useRef, useState } from 'react'

const App = () => {

// const [count, setCount] = useState(0);
// let val = useRef(0);
//  let btnRef = useRef();

// function handleClick(){
//   val.current = val.current + 1;
//   console.log("val valu is:" , val.current)
//   setCount(count+1)
// }

// useEffect(()=>{
//   console.log('mai firse render ho gysa hu');
  
// })

// function changeColor(){
//   btnRef.current.style.backgroundColor = "red"
// }


const [time, setTime] =useState(0);

let timeRef =useRef(null);

function startTimer(){
  timeRef.current = setInterval(() => {
    setTime(time => time+1)
  }, 1000);
}

function stopTimer(){
  clearInterval(timeRef.current);
  timeRef.current = null;
}

function resetTimer(){
  stopTimer();
  setTime(0)
}

  return (
    <div>

      <h1>Stopwatch {time} seconds</h1>
      <button 
        onClick={startTimer}>
        Start</button>

      <button 
      onClick={stopTimer}>
        Stop</button>
      
      <button 
      onClick={resetTimer}>
        Reset</button>  
    





      {/* <button
       ref={btnRef}
       className='inc'
       onClick={()=>{
        handleClick()
      }}>Increment</button>  

      <button 
      onClick={changeColor}>Chnage Color of 1st Button</button>

      <div className='count'>
        Count: {count}
      </div> */}
      
    </div>
  )
}

export default App
