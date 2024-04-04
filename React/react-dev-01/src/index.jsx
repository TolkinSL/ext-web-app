import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const myText = 'Hello World';

const elem = (
  <div>
    <h2 className="text">Test: {myText}</h2>
    <input type="text" />
    <button>Click me</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'main_element'}, 'Hello world');
console.log(elem);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  elem
);
