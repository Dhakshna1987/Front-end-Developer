import React from "react";
import UpdatedComponent from "./UpdatedComponent";

function Item2({cost, costHandler }){
    return (
        <div className="item2">
            <h1>
                Item2 Cost : <span>${cost}</span>
            </h1>
            <button onClick={costHandler}>Increase Cost</button>
        </div>
    );
}

export default UpdatedComponent(Item2);

