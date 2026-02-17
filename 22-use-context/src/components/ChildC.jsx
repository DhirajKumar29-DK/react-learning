import { useContext } from 'react';
import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {

  const user = useContext(UserContext);

  const {theme, setTheme} = useContext(ThemeContext);
  const handleClicked =() =>{
    if(theme == 'light'){
      setTheme('dark')
    } else{
      setTheme('light')
    }
  }
  return (
    <div>
     <button onClick={handleClicked}>
      Change Theme
     </button>
     {user}
    </div>
  )
}

export default ChildC;
