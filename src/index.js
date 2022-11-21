import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { AuthContextCustom } from './context/use-auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextCustom>
      <App />
    </AuthContextCustom>
  </React.StrictMode>
);


