import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from'react-router-dom'
import Erro from './Erro.jsx'
import InsertProduct from './InsertProduct.jsx'
import ListProducts from './ListProducts.jsx'


const router = createBrowserRouter([
  { 
  path: "/",
  element: <App/>,
  errorElement: <Erro/>,
  children:[ 
  {
    path: "/",
    element: <ListProducts/>
  },
  {
    path: "/insert",
    element: <InsertProduct/>
  }
]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
