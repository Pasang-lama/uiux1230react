import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/style.scss"
import About from './pages/About.jsx';
import Error from './Error/Error.jsx';
import Contact from './pages/Contact.jsx';
import Reacthook from './pages/Reacthook.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/*" element={<Error />} />
    <Route path="/hook" element={<Reacthook />} />
    <Route path="/product" element={<Product />} />
    <Route path="product/:id" element={<ProductDetails />} />


  </Routes>
</BrowserRouter>
)
