import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import UserId from './components/User/UserId.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


/* const router= createBrowserRouter([   //This is an method which takes an array
  { 
    path:'/', 
    element:<Layout/>,
    children:[ 
      { 
        path:"", 
        element:<Home/>
      }, 
      { 
        path:"about", 
        element:<About/>
      }, 
      { 
        path:"contact", 
        element:<Contact/>
      },
    ]
  }
])  */ 

const router=createBrowserRouter( //2nd way 
  createRoutesFromElements( 
    <Route path="/" element={<Layout/>}> 
     <Route path="" element={<Home/>}/>  
     <Route path="about" element={<About/>}/> 
     <Route path="contact" element={<Contact/>}/>  
     <Route path="user/:userId" element={<UserId/>}/>  
     <Route 
     loader={githubInfoLoader}
     path="github" 
     element={<Github/>}
     
     /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> {/* This Component takes Prop */}
  </React.StrictMode>,
)
