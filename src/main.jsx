import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './pages/home/home.jsx'
import { DotBackground } from './components/background/background.jsx'
import Aboutpage from './pages/about/about.jsx'
import Projectpage from './pages/projects/projects.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './outline.jsx'


const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Homepage/>
        },
        {
          path:'/about',
          element:<Aboutpage/>
        },
        {
          path:'/projects',
          element:<Projectpage/>
        },
        // {
        //   path:"/contact",
        //   element
        // },
        // {
        //   path:"/blogs",
        //   element
        // }
      ]

    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
