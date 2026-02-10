import {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

const submitHandler = (e) =>{
  e.preventDefault(e)
  console.log(title)
  console.log(details)

  const copyTask = [...task];
  copyTask.push({title,details});
  // copyTask.push([title,details]);
  setTask(copyTask)
  console.log(task);
  
  
  setTitle('')
  setDetails('')
}
 
 const deleteNote = (idx) =>{
 const copyTask = [...task];
  
  copyTask.splice(idx,1)
  setTask(copyTask)
  
 }


  return (
    <div className='h-screen lg:h-screen bg-cover lg:flex bg-black text-white'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }} className='flex flex-col p-10 items-start lg:w-1/2 gap-4 '>         
        
      <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input 
        type="text"  
        placeholder='Enter Your Notes'
        className='px-5 py-2 border-2 w-full outline-none rounded font-medium'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <textarea 
          type="text"
          className='px-5 h-32 py-2 flex items-start flex-row border-2 outline-none w-full rounded font-medium'
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 text-black px-5 py-2 w-full rounded font-medium'>Add Note</button>   
       </form>

       <div className=' lg:w-1/2 lg:border-l-2  p-10'>
       <h1 className='text-4xl font-bold'>Recent Notes</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto' >
        {task.map((elem, idx) =>{

          return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-40  text-black px-4 pb-3 py-6 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s")] rounded-2xl'>
            <div>
              <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
              <p className='mt-3 leading-tight text-xs font-medium text-gray-500 break-all '>{elem.details}</p>
            </div>
             <button onClick={(idx)=>{
              deleteNote(idx)
             }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
       </div>
       </div>
    </div>
  )
}

export default App
