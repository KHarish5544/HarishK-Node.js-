import React, { useState } from 'react';

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-message">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>
      {isVisible && <h1><p className="message">Hello, my name is K.harish</p></h1>}
    </div>
  );
}

export default ToggleMessage;
