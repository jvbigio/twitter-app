import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <nav className='top-nav'>
      <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      <NavLink to='/search' activeClassName='active'>Search</NavLink>
      <NavLink to='/random' activeClassName='active'>Random</NavLink>
    </nav>
  )
}

export default Navigation
