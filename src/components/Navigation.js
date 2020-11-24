import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/search'>Search</NavLink>
      <NavLink to='/random'>Random</NavLink>
    </div>
  )
}

export default Navigation
