import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <div className='sidebar'>
      <div className='section'>
        <div className='item'>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        </div>
        <div className='item'>
          <NavLink to='/search' activeClassName='active'>Search</NavLink>
        </div>
        <div className='item'>
          <NavLink to='/random' activeClassName='active'>Random</NavLink>
        </div>
      </div>
      <div className='section'>
        <div className='item'>Settings</div>
        <div className='item'>Questions?</div>
      </div>
    </div>
  )
}

//  return (
//     <div className='sidebar'>
//       <div className='section'>
//         <NavLink className='item' exact to='/' activeClassName='active'>Home</NavLink>
//         <NavLink className='item' to='/search' activeClassName='active'>Search</NavLink>
//         <NavLink className='item' to='/random' activeClassName='active'>Random</NavLink>
//       </div>
//       <div className='section'>
//         <div className='item'>Settings</div>
//         <div className='item'>Questions?</div>
//       </div>
//     </div>
//   )

//  return (
//     <div className='sidebar'>
//       <div className='section'>
//         <div className='item'>
//           <NavLink exact to='/' activeClassName='active'>Home</NavLink>
//         </div>
//         <div className='item'>
//           <NavLink className='item' to='/search' activeClassName='active'>Search</NavLink>
//         </div>
//         <div className='item'>
//           <NavLink className='item' to='/random' activeClassName='active'>Random</NavLink>
//         </div>
//       </div>
//     </div>
//   )
// }

export default Navigation
