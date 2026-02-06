import React from 'react'

const ImageCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
        <div>
             <p className='text-shadow-sm text-base leading-relaxed  text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam ipsum neque perferendis deserunt dignissimos!</p>
          <div className="flex items-center justify-between">
             <button style={{background:props.color}} className= 'text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
             <button style={{background:props.color}} className= 'text-white font-medium  px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default ImageCardContent
