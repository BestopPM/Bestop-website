import React from 'react';
import { render } from 'react-dom';
import App from './frontend/components/App.jsx';
import Contact from './frontend/components/Contact.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)