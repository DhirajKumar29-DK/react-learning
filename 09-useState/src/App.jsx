import React, { useState } from 'react'

const App = () => {

//   let a = 20;

// function changeA(){
//    console.log(a);
//   a++;
//    console.log(a);
// }

// const [num, setNum] = useState(10);
// const [username, setUsername] =useState('Dhiraj');
// const [users, setUsers] =useState([10,20,30]);


// function changeNum(){
//   setNum(30)
//   setUsername('Anjali')
//   setUsers([30])
// }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> value of username is {username} <br /> value of users is {users}</h1>

//       <button onClick={changeNum} >Click</button>
//     </div>
//   )


const [num, setNum] = useState(0);

function increaseNum(){
  console.log("increasing");
  setNum(num+1)
  
}

function decreaseNum(){
  console.log("decreasing");
  setNum(num-1) 
}

function increaseby5(){
  console.log("increaseby5");
  setNum(num+5) 
}

   return(
   <div>
    <h1>{num}</h1>
     <button onClick={increaseNum}>Decrease</button>
    <button onClick={decreaseNum}>Increase</button> <br />
    <button onClick={increaseby5}>increaseby5</button>
   </div>
   )
}

export default App
