import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Homepage from './pages/Homepage.jsx'
import Productpage from './pages/Productpage.jsx'
import Hotelmanagement from './pages/Hotelmanagement.jsx'
import HRmanagement from './pages/HRmanagement.jsx'
import Contactus from './pages/Contactus.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Homepage/> ,

      },
      {
        path: "/aboutus",
        element:<Aboutus/> ,

      },
      {
        path: "/productpage",
        element:<Productpage/> ,

      },
      {
        path: "/hotelmanagement",
        element: <Hotelmanagement />,
      },
      {
        path: "/hrmanangement",
        element: <HRmanagement/>,
      },
      {
        path: "/contactus",
        element: <Contactus/>,
      },
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
  <App />
  </RouterProvider>
)
