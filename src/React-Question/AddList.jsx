import React,{useState} from "react";


function AddList() {

    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if(inputValue.trim() !== ''){
            setList([...list, inputValue]);
            setInputValue('');
        }
    }
    console.log(list)
    return (
        <div>
           
            <h1>Add Item</h1>
            <input type="text" name='name' value= {inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
            <button type="submit" onClick={addItem} >ADD</button>
            
            {list?.map((item, i) => {
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </div>
    )
}

export default AddList;