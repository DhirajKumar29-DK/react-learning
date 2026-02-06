import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
        
    return (
    <div className='pb-16 py-10 px-6 pt-6 flex items-center gap-10 h-[90vh] '>
      <LeftText />
      <ImageContainer users={props.users}/>
    </div>
  )
}

export default Page1Content
