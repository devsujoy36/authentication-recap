import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root/Root.jsx'
import Hero from './Components/Hero/Hero.jsx'
import LogIn from './Components/LogIn/LogIn.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import Home from './Components/Home/Home.jsx'
import Orders from './Components/Orders/Orders.jsx'
import PrivateRoute from './Components/routes/PrivateRoute/PrivateRoute.jsx'
import Profile from './Components/Profile/Profile.jsx'
import ErrorPage from './Root/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/hero",
        element: <Hero />
      },
      
      {
        path: "/hero",
        element: <Hero />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
