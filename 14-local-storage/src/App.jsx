import React from 'react'

const App = () => {

//  const user = localStorage.getItem('user');
//  console.log(user);

// const age= localStorage.getItem('age');
//  console.log(age);

//  localStorage.removeItem('user')

const user = {
  name: "Dhiraj",
  age: 24,
  city: "Hajipur"
};

localStorage.setItem("user", JSON.stringify(user))
console.log(user)
console.log(typeof(user))

const userS = JSON.parse(localStorage.getItem('user'))
console.log(userS)
console.log(typeof(userS))
 
  return (
    <div>
  
    </div>
  )
}

export default App
