

import {useState, createContext } from 'react';
import { Parent } from './GrandChild';

//create context
let myContext = createContext();

function App() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>App Component</h1>
            <p>
                Count Data: <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </p>
            {/* Provide context data */}
            <myContext.Provider value={count}>
                <Parent />
            </myContext.Provider>

        </div>
    )
}

export default App;
export {myContext}