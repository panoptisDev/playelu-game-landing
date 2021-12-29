import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'animate.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

window.onload = function () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}