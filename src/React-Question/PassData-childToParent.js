
//How to pass data from child to parent in react ?

import React from "react";

export default function Parent(){
    const [UIcolor, setColor] = React.useState(null);

    const getColor = (color) => {
        setColor(color)
    }
    return(
        <div>
            <div style={{background: `${UIcolor}`}}>
            <Child getColor={getColor} />
            </div>
        </div>
    )
}

export function Child({getColor}){

    const [color, setColor] = React.useState(null);
    const handleChange = (e) => {
        setColor(e.target.value);
        getColor(e.target.value);
    }
    return(
        <>
        <input type="text" onChange={handleChange} value={color}/>
        </>
    )
}