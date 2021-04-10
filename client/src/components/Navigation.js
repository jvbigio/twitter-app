import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation () {
  return (
    <nav className='top-nav' id='topNav'>
      <div className='pages'>
        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        <NavLink to='/search' activeClassName='active'>Search</NavLink>
        <NavLink to='/random' activeClassName='active'>Random</NavLink>
      </div>
      <div className='header-title'>
        <h2>Yapper</h2>
      </div>
    </nav>
  )
}

export default Navigation
