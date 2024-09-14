import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for createRoot
import './index.css';
import Hello from './hello'; // Ensure hello is a valid React component (with a capitalized name)

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create the root

root.render(
  <Hello />
);

reportWebVitals();
