import React from "react";

function MyForm() {
    return (
        <form onSubmit={handleSubmit}>
            <lable> Name: 
                <input type="text" value={name}/>
            </lable>
        </form>
    )
}