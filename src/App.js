import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import {Login} from './Pages/Login'
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Header from "./Components/Header";
// import "react-loading-skeleton/dist/skeleton.css";
import "react-loading-skeleton"



function App() {
  return (
    <>
    <div>
    <Login/>
    </div>
      {/* <Header/> */}
      {/* <Container fluid className="p-0" style={{ marginTop: "80px" }}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container> */}
      
    </>
  );
}

export default App;

