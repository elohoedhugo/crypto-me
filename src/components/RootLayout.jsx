import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <header><Navbar/></header>

    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default RootLayout