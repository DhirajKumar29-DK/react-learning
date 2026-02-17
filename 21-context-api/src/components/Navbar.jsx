import { useContext } from 'react'
import Navbar2 from './Navbar2'
import { PostDataContext } from './context/ThemeContext';

const Navbar = (props) => {
    console.log(props.children);

   const data = useContext(PostDataContext);
   console.log(data) 

  return (
    <div className='nav'>
      <h2>{data}</h2>
      {/* {props.children[0]}*/}
      <Navbar2 theme={props.theme} />
    </div>
  )
}

export default Navbar
