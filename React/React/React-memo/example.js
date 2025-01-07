import React, { useState } from 'react';

// A child component that will only re-render if its props change
const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <div>Count: {count}</div>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <h2>React.memo() Example</h2>
      <ChildComponent count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
    </div>
  );
};

export default ParentComponent;
