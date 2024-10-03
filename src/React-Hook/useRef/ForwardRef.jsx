import React, { forwardRef, useRef } from 'react';



const ChildComponent = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})


function ParentComponent() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.value = "hello world"
    }

    return (
        <div>
            <ChildComponent ref={inputRef} />

            <button onClick={handleClick}>update Input</button>

        </div>

    )
}

export default ParentComponent;