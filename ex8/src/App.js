import React, { useState } from 'react';
import './App.css';
import LifecycleLogger from './LifecycleLogger';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App">
      {showComponent && <LifecycleLogger />}
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>
    </div>
  );
}

export default App;
