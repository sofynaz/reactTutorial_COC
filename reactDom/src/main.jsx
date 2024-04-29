import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './componenets/Layout.jsx'
import About from './componenets/About/About.jsx';
import Contact from './componenets/Contact/Contact.jsx';
import Home from './componenets/Home/Home.jsx';
import User from './componenets/User/User.jsx'
import Github, { githubInfoLoader } from './componenets/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'user/:userid',
      element: <User />
    },
    {
      loader: githubInfoLoader,
      path: 'github',
      element: <Github />
    }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path='/' element={<Layout/>} />
//       <Route path='' element={<Home/>} />
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//     </Route>
//   )
// ) 
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />


)
