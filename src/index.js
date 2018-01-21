import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './App2';
// import App from './App3';
//import App from './App4';
import App from './App.higher.order.component';
import registerServiceWorker from './registerServiceWorker';

// setting props
ReactDOM.render(<App cat={8} txt="this is the prop text"/>, document.getElementById('root'));
registerServiceWorker();
