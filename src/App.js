import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <HomePage/>
      <ProductPage/>
      <Login/>
      <Register/>
    </>
  );
}

export default App;
