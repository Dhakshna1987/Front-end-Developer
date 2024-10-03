
import React from "react";
import UpdatedComponent from "./UpdatedComponent";

function Item1({cost, costHandler }){
    return (
        <div className="item1">
            <h1>
                Item1 Cost : <span>${cost}</span>
            </h1>
            <button onClick={costHandler}>Increase Cost</button>
        </div>
    );
}

export default UpdatedComponent(Item1);

