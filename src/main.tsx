import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './components/App';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      hideProgressBar={true}
      closeOnClick
      pauseOnHover
      autoClose={3000}
    />
  </React.StrictMode>
)
