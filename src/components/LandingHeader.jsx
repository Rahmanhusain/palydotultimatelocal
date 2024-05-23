import React from 'react'
import './components.css'
import logo from '../images/Logpfrisbee.png'

export default function LandingHeader() {
  return (
    <div className='headerLand'><div className='items'><img src={logo} alt="image" /><h3>Play.Ultimate</h3></div><div className="items"><button id='navbtn'>Login</button></div></div>
  )
}
