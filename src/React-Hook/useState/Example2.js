import React, {useState} from "react";


function Bike() {

    const [bike, setBike] = useState({
        brand: "Pulsar",
        model: "220",
        year: "2023",
        color: "blue"
    });

    const updateColor = () => {
        setBike(previousState => {
            return { ...previousState, color: "block"}
        })
    }
    return (
        <>
        <h1> Bikes</h1>
        <p>
            My fav bike is {bike.brand} {bike.model} It is a {bike.color} from {bike.year}
        </p>
        <button onClick={updateColor}>
            Block color</button></>
    )
}

export default Bike;
