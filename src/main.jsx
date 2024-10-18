import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Page1 from './components/page-1.jsx'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Page2 from './components/page-2.jsx'
import Page3 from './components/page-3.jsx'
import Page4 from './components/page-4.jsx'
// import Qr from './components/qr.jsx'


const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path="" element={<Page1/>}/>
    <Route path="aim" element={<Page2/>}/>
    <Route path="team" element={<Page3/>}/>
    <Route path="gallery" element={<Page4/>}/>
    {/* <Route path="qr" element={<Qr/>}/> */}

  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
