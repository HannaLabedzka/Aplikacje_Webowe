import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
    {path:'/', element:<App/>},
    {path:'/dashboard', element: <Dashboard/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  </StrictMode>,
    <RouterProvider router={router}/>
)
