<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import 'react-loading-skeleton';
import 'react-bootstrap';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store'
>>>>>>> 879aad440acac9904be31b960d0168e14f90cd77

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
