import React, { useContext } from 'react';
import { myContext } from './App';

export default function GrandChild() {

    //use useContext hooks access context.
    let contextValue = useContext(myContext)
    return (
        <div>
            <h1>Grand Child</h1>
            <p>count: <span>{contextValue}</span>
            </p>
        </div>
    )
}