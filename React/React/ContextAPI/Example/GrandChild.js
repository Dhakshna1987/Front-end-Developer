import React, { useContext } from 'react';
import { myContext } from './App';

export default function GrandChild() {

    return (
        <>
        <myContext.Consumer> 
        {(data) => (
            <div>
            <h3> Child Component</h3>
            <p> Received data: {data} </p>
            </div>
        )}
        </myContext.Consumer>
        </>
    )
}