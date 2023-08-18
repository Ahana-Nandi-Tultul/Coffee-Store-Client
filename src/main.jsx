import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import CoffeeAdd from './components/CoffeeAdd.jsx'
import CoffeeUpdate from './components/CoffeeUpdate.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:3000/coffee')
  },
  {
    path: '/add',
    element: <CoffeeAdd></CoffeeAdd>

  },
  {
    path: '/update/:id',
    element: <CoffeeUpdate></CoffeeUpdate>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
