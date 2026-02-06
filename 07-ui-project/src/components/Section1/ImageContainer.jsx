import ImageCard from './ImageCard'
import 'remixicon/fonts/remixicon.css'

const ImageContainer = (props) => {
    console.log(props.users);
    
  return (
    <div id='right' className='h-full w-2/3 p-6 overflow-x-auto flex flex-nowrap gap-10 '>
      {props.users.map(function(elem){
        return <ImageCard color={elem.color} id={elem.id} img={elem.img} tag={elem.tag} />
      })}
      
     </div>
  )
} 

export default ImageContainer
