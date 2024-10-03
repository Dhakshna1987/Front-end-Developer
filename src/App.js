
import { useEffect,useMemo,useState } from 'react';
import './App.css';
import { CalculateFactorial } from './React-Hook/useMemo/ExamUseMemo';
import AddList from './React-Question/AddList';
import FormDataApi from './React-Question/FormDataApi';
import Parent from './React-Question/PassData-childToParent';

function App() {

  const [a, setA] = useState(1);
  const [b, setB] = useState(1);

  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0 ; i < 1000000; i++){
      sum += i;
    }
    return sum;
  },[a,b])
    
  return(
    <div>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
      <p>{result}</p>
    </div>
  )
}

export default App;
