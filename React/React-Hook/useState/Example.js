import React, {useState} from 'react';

function HooksUseState() {
    const [count, setCount] = useState(0);


    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }
    return ( 
        <div>
            <h1 style={{ color: "lightblue"}}> Counter | useState() </h1>
            <h1> Counter: {count}</h1>
            <button onClick={increase}>Click to Increase</button>
            <button onClick={decrease}>Click to Decrease</button>
        </div>
    )
}

export default HooksUseState;