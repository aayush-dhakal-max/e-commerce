import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./page/Home";
import Products from "./page/Products";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Signup from "./page/Signup";
import NewProduct from "./page/NewProduct";
import ProductDetails from "./page/ProductDetails";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./page/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="cart" element={<Cart />} />
      <Route path="newproduct" element={<NewProduct />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productID" element={<ProductDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
