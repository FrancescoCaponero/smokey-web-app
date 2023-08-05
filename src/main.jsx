import React  from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Barbeques from './pages/Barbeques';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Login from './pages/Auth/Login';
import SignIn from './pages/Auth/SignIn';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import ErrorPage from './pages/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/barbeques",
    element: <Barbeques />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/log",
    element: <Login />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <RouterProvider router={router}/>
  </React.StrictMode>

)
