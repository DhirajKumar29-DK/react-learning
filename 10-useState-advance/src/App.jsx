import React, { useState } from 'react'

const App = () => {

  // const[num, setNum] = useState({user:'Dhiraj',age:20});

 // const[num, setNum] = useState([20,28,29]);

  const[num, setNum] = useState(10);

  const btnClicked =() =>{
    // setNum(num-1)
    // console.log(num.user)
    // console.log(num.age)


    // const newNum ={...num};
    // newNum.user=('abhi');
    // newNum.age=(5)
    // console.log(newNum);
    // setNum(newNum)


    // const newNum = [...num];
    // newNum.push(5);
    // setNum(newNum)

    
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

    setNum(prev => (prev +1));
    setNum(prev => (prev +1));
    setNum(prev => (prev +1));
  }

  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
