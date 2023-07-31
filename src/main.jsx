import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Barbeques from './pages/Barbeques';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import Login from './pages/Auth/Login';
import SignIn from './pages/Auth/SignIn';
import Products from './pages/Products';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/Contacts",
    element: <Contacts />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/log",
    element: <Login />
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
