import React from 'react'

 const FormDataApi = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); // indicates the element to which the event is attached 
        const newUser = Object.fromEntries(formData);  // Object.fromEntries converts the data into key-value pair as in objects
        console.log(newUser);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="name" name="name"/>
            <input type="text" placeholder="email" name="email"/>
            <input type="text" placeholder="password"  name="password"/>
            <button type="submit">submit</button>
        </form>
        </>
    )
    
}
export default FormDataApi;
