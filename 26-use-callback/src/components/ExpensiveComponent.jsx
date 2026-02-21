import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ExpensiveComponent = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const previousFunction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running inside expensiveTask");
    let result = 0;
    for(let i=0; i < 1000000000; i++) {
        result += i
    }
    return result;
  }, [count]);

  useEffect(() => {
        if(previousFunction.current === expensiveCalculation){
            console.log("Function is same")
        } else {
            console.log("Function got re-created");
        }
        previousFunction.current = expensiveCalculation;
    
  }, [expensiveCalculation])

    return (
      <div>

    <h1>Count: {count}</h1>
    <br />
    <button onClick={() =>
      setCount(count+1)
    }>
      Increment Count
    </button>

    <br />
    <h1>Expensive Calculation Result:{expensiveCalculation()}</h1>
    <input 
     type="text"
     placeholder='Type Something'
     value={text}
     onChange={(e) => {
      setText(e.target.value)
     }}
    />
    </div>
  )
}

export default ExpensiveComponent
