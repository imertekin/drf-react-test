import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'


axios.defaults.baseURL='http://127.0.0.1:8000/api/';
// axios.defaults.headers.common['Authorization']='token'+' '+localStorage.getItem('token')

const token = 'token '+localStorage.getItem("token")
axios.defaults.headers.common['Authorization']=token ? token : null


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
