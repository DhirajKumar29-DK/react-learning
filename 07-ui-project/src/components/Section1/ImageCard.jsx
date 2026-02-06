import ImageCardContent from './ImageCardContent'

const ImageCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 relative overflow-hidden rounded-4xl'>
       <img className='h-full w-full object-cover ' src={props.img} alt="" />
       
       <ImageCardContent color={props.color} tag={props.tag} id={props.id}/>
    </div>
  )
}

export default ImageCard
