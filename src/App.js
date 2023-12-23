import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Product from "./pages/Product";

import Authentication from "./components/Authentication";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto mt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />
          <Route path='/authentication/:login' element={<Authentication />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
