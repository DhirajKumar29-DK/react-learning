import React from 'react'

const ChildComponent = React.memo(
     (props) => {
    console.log('child component go re-render');
    
    return (
      <div>
        <button onClick={props.handleClick}>
             {props.buttonName}
       </button>
        </div>
    )
  }
)


export default ChildComponent

//React.memo -> wrap -> component -> component re-render tabhi hoda jab props change honge nhi toh re-render nhi hoga.

//If you are sending a function, then 