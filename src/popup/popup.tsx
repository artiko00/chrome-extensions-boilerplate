import React from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
const test = <h1>Hello, world</h1>
// Render your React component instead
const root = createRoot(document.body);
root.render(test);