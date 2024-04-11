import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authenticate from './components/Authenticate.jsx';
import Destinations from './components/Destinations.jsx';
import City from './components/City.jsx';
import Welcome from './components/Welcome.jsx';
import Hotel from './components/Hotel.jsx';
const router = createBrowserRouter([{
  path : "/",
  element : <App />,
  children : [
    {
      path : "/",
      element :  <Welcome/>
    },
    {
      path : "/user",
      element : <Authenticate/>
    },
    {
      path : "/destinations/:userId",
      element : <Destinations/>
    },
    {
      path : "/destinations/:userId/:desId",
      element : <City/>
    },
    {
      path : "/hotel/:userId",
      element : <Hotel/>
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
