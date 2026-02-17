import { createContext } from "react"

export const PostDataContext = createContext()

const ThemeContext = (props) => {
  return (
    <div>
      {/* {props.children} */}
      <PostDataContext.Provider value='Dhiraj'>
          {props.children}
      </PostDataContext.Provider>
    </div>
  )
}

export default ThemeContext
