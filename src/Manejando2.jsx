import React, { useState } from 'react';

function Input() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <p>You typed: {value}</p>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;