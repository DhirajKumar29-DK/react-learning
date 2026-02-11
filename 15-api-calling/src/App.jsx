import axios from 'axios'
import { useState } from 'react'

const App = () => {

const[data, setData] = useState([]);

//-----------------Fetch Data--------------
  // const getData =( async ()=>{
  //   // console.log('Data aa gya')

  //  const response =await fetch('https://jsonplaceholder.typicode.com/users')

  //  const data =await response.json();
  //  console.log(data);
  // })

  //--------Axios------------------------

  const getData =async () =>{
    const response =await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx)=>{

          return <h3>hellow, {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
