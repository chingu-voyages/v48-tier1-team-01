import React from 'react';
import { useState } from 'react';

const Nav = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav>
          <div className="header">
            <div className='logo'>
              <img src={props.dinoLogo}></img>
              <span>chinguDino</span>
            </div>
            <ul>
              <li><a href='#' className='active'>Search</a></li>
              <li><a href='#' className='inactive'>Dietchart</a></li>
            </ul>
            <div className='menu' onClick={()=>setShow(!show)}>
                <img src={
                  show ? props.cross : props.hamBurger
                }></img>
            </div>
          </div>
          {
            show ?
            <div className="dropDown">
            <ul>
              <li className='active'><a href='#'>Search</a></li>
              <li className='inactive'><a href='#'>Dietchart</a></li>
            </ul>
          </div>
          : null
          }
          
      </nav>
    </>
  );
}

export default Nav;
