import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div>{/* <Navbar /> */}</div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
