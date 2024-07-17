import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Button; 