import React from 'react';
import { useState } from 'react';

const Nav = (props) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className="fixed top-0 left-0 max-sm:w-screen max-sm:p-0 w-full justify-center flex-col p-3 border-solid border-b-2 border-[rgba(0,0,0,0.1)]] bg-white">
          <div className="flex justify-between flex-wrap gap-4">
            <div className="flex">
              <img className="w-[2.4rem] self-end max-sm:w-[60px] max-sm:h-[60x]" src={props.dinoLogo}></img>
              <span className="text-[2.4rem] font-bold max-sm:hidden">chinguDino</span>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-8 list-none m-0 max-sm:hidden">{[
                  ['Search', '#'],
                  ['Dietchart', '#'],
                ].map(([title, url]) =>(
                  <li><a href={url} className="hover:text-[blue] no-underline text-[1.5rem] m-0 py-[1.5rem]">{title}</a></li>
                ))}
              </ul>
              <div className='sm:block'>
                <img className="sm:hidden max-sm:w-[60px] max-sm:h-[60px] hover:cursor-pointer" onClick={()=>setShow(!show)} src={show ? props.cross : props.hamBurger} ></img>
              </div>
            </div>
          </div>
            {
              show ?
              <div className="h-24" >
              <ul className="flex items-start gap-1 list-none m-0 flex-col">{[
                ['Search', '#'],
                ['Dietchart', '#'],
              ].map(([title, url]) =>(
                <li><a href={url} className="hover:text-[blue] no-underline text-[1.5rem] m-0">{title}</a></li>
              ))}
            </ul>
              </div>
              : null
            }
      </nav>
    </>
  );
}

export default Nav;