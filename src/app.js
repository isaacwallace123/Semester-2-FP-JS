import { Route, Routes } from "react-router-dom";

import './app.css';

import ErrorPage from "./routes/error/error-page";

import Login from "./routes/login/login";
import Product from "./routes/product/product";
import Cart from "./routes/cart/cart";

import Header from "./components/header";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/products" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

export default App;