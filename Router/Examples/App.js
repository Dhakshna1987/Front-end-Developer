import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
 import reportWebVitals from './reportWebVitals';
 import { BrowserRouter } from 'react-router-dom';


  //App.js
  import { Route, Routes } from 'react-router-dom';
  import './App.css';
  import Home from './Home';
  import About from './About';
  import Contact from './Contact';
 
  function App() {
    return (
      <div className="App">
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
       </Routes>
      </div>
    );
  }
 
  export default App;
 

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
   </React.StrictMode>
 );

 // If you want to start measuring performance in your app, pass a function
 // to log results (for example: reportWebVitals(console.log))
 // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();


 