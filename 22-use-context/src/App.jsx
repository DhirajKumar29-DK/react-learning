import { createContext, useState } from 'react'
import "./App.css"
import ChildA from './components/ChildA'

// // Step 1: Create Context
const UserContext = createContext();
// //Step2: wrap all the child inside a provider
// //Step3: Pass the value 
// //Step4: go inside the consumser and consumed it.

const ThemeContext = createContext();

const App = () => {
  const [user, setUser] = useState("Dhiraj")
  const [theme, setTheme] =useState("dark")

  return (
    <>
    <div >
     <UserContext.Provider value={user}>
       <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='box' style={{background:theme=='light'?'beige':'black'}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
     </UserContext.Provider>
    </div>
    </>






    // <div>
    //   {/* Step 2: Wrap children inside Provider */}
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>
    // </div>
  )
}

export default App
export { UserContext }
export { ThemeContext }
