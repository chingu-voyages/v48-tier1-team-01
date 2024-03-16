import React from 'react'

const Nav = (props) => {
  return (
    <nav>
        <div className='logo'>
            <img src={props.dinoLogo}></img>
            <span>chinguDino</span>
        </div>
        <ul>
            <li><a href='#' className="active">Search</a></li>
            <li><a href='#' className="inactive">Dietchart</a></li>
        </ul>
        <div className='hamburger'>
            <img src={props.hamBurger}></img>
        </div>
    </nav>
  )
}

export default Nav;
