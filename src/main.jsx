import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Children } from 'react'
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom'


import LoginForm from '../componentes/LoginForm.jsx'
import Form from '../componentes/Form.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,

    children: [
      {
        path: "/",
        element: <LoginForm/>
      },
      {
        path:"/registrousuario",
        element: <Form/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
