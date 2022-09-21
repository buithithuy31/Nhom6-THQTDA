import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Login from "./Pages/Login";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Header from "./Components/Header";



function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
      {/* <HomePage/> */}
      {/* <ProductPage/> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </>
  );
}

export default App;
