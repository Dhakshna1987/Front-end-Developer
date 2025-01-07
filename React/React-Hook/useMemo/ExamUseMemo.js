
import React, { useState, useMemo } from 'react';



function ExpensiveComponent() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  // Expensive calculation: factorial
  const factorial = (n) => {
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  };

  // Use useMemo to memoize the factorial result
  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial of {number}: {memoizedFactorial}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input
        type="text"
        value={text}
        placeholder="Type something"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default ExpensiveComponent;