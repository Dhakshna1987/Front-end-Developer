import { useRef } from "react";


const App = () => {
    //Evoking useRef for each input
    const name = useRef(); 
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name.current.value) // getting the value of each element
    }
    return (
        //Linking useRef with input elements
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name"  ref={name}/>
            <input type="email" placeholder="email" ref={email} />
            <input type="password" placeholder="password"  ref={password}/>
            <button>submit</button>
        </form>
    )
}

export default App;