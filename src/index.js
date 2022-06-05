import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();

}

const root = ReactDOM.createRoot(document.getElementById('root'));
const greetGuest = <h1>Welocme to the world of React!{`\n`}
This is the historical day: {getCurrentDate()} where you started to learn React</h1>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
