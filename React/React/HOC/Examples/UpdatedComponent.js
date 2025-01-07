import React, { useState } from "react";

const  UpdatedComponent =(OriginalComponent)=> {
    function NewComponent() {
        const [cost, setCost] = useState(10);
        let constHandler = () => {
            setCost(cost + 10);
        };
        return (
            <OriginalComponent constHandler = {constHandler} cost = {cost} />
        );
    }
    return NewComponent;
}

export default UpdatedComponent;