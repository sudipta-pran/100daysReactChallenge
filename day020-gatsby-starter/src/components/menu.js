import React from 'react'
import Link from 'gatsby-link'

const Menu = () => {
  return (
    <div>
      <ul style={{
          display:'flex',
          justifyContent:'space-evenly'
      }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Menu
