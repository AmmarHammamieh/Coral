import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Startup from '../Startup'

function Layout() {
  return (
    <>
      <Startup/>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout