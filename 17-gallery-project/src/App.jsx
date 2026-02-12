import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {

const[userData, setUserData] = useState([]);

const[index, setIndex] = useState(1);

  const getData = (async () =>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data);
  })

  useEffect(()=>{
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem, idx){

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

      {/* <button 
      onClick={() =>{
        getData( )
      }}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>
        Get Data
        </button> */}

        <div className=' flex h-[90%] flex-wrap gap-4 p-5'>
          {printUserData}
        </div>

        <div className='flex justify-center items-center gap-6 p-6'>
          <button
          style={{opacity:index == 1 ? 0.5 : 1 }}
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}
           className='bg-amber-500 text-xs font-semibold p-3 rounded-xl cursor-pointer active:scale-95'>
            Prev
          </button>
          <h4>page {index}</h4>
          <button onClick={()=>{
               setIndex(index+1)
               setUserData([])
          }}
           className='bg-amber-500 text-xs font-semibold p-3 rounded-xl cursor-pointer active:scale-95'>
            Next
          </button> 
        </div>
    </div>
  )
}

export default App
