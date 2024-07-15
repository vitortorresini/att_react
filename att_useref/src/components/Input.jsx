import React, { useRef } from 'react';

function Input() {
  const inputRef = useRef(null);

  const handleClearInput = () => {
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClearInput}>Clear</button>
    </div>
  );
}

export default Input;
