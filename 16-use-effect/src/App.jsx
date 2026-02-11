import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

// const[num, setNum] = useState(10);
// const[num2, setNum2] = useState(100)

//   useEffect(() =>{
//     console.log('use effect is running');
//   },[num,num2])

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>
//       <button onMouseEnter={() =>{
//         setNum(num+1)
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10)
//       }}
//       >click</button>
//     </div>
//   )


const[a, setA] = useState(0)
const[b, setB] = useState(0)

const aChange = () =>{
   console.log("A is changing")
};

const bChange = () =>{
   console.log("b is changing")
}

useEffect(function(){
  aChange()
  },[a])

  useEffect(function(){
  bChange()
  },[b])

return(
  <div>
    <h1>A is {a}</h1>
    <h1>B is {b}</h1>
    <button
    onClick={ () =>{
      setA(a+1)
    }} 
    >Change A</button>
    <button 
    onClick={ () =>{
      setB(b-1)
    }}
    >Change B</button>
  </div>
)

}

export default App
