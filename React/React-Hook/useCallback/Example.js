import React, {useState, useCallback} from "react";

function ParentComponent() {
    const [count, setCount] = useState(0);

    //With useCallback:
    //The function is only re-created when count changes

    const memoizedIncrement = useCallback(() => {
         setCount((prevCount) => prevCount + 1 );
    }, [count]);

    return (
        <div>
            <p> Count: {count} </p> 
            {/* Receives the memoizedIncrement function */}
            <ChildComponent increment = {memoizedIncrement} />
        </div>
    )
}

function ChildComponent ({ increment}) {
    return <button onClick = {increment} >Increment</button>
}

export default ParentComponent;