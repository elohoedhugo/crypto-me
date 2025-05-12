import React from 'react'
import { TbWorld } from "react-icons/tb";
import { RiMoonLine } from "react-icons/ri";
import logo from "../../assets/mexc-logo.svg" 
import "../navbar/navbar.css"


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>   
      <img className='logo' src={logo} alt="" />
      <div>
      <TbWorld  className='react-icon'/>
      <RiMoonLine  className='react-icon'/>
      </div>
      </div>
    </div>
  )
}

export default Navbar