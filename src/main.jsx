import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Application entry point
// Attaches the React app to the root DOM node
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)