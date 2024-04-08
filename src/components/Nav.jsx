import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-white z-10 shadow-md p-3 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-4 no-underline">
            <img
              className="w-[2.4rem] h-auto"
              src={props.dinoLogo}
              alt="Dino Logo"
            />
            <span className="text-[2.4rem] font-bold hover:text-blue-500">
              chinguDino
            </span>
          </Link>

          <ul className="hidden sm:flex items-center gap-8 list-none m-0">
            {[
              ['Search', '/'],
              ['Diet Chart', '/chart'],
            ].map(([title, url]) => (
              <li key={title}>
                <Link
                  to={url}
                  className="hover:text-blue-500 no-underline text-[1.5rem] py-[1.5rem]"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="sm:hidden">
            <img
              onClick={() => setShow(!show)}
              src={show ? props.cross : props.hamBurger}
              alt="Menu Toggle"
              className="w-[2.4rem] h-auto cursor-pointer"
            />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {show && (
          <div className="sm:hidden">
            <ul className="flex flex-col items-start gap-1 list-none m-0 p-3">
              {[
                ['Search', '/'],
                ['Diet Chart', '/chart'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    to={url}
                    className="block hover:text-blue-500 no-underline text-[1.5rem]"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {show ? <div className="mt-24"></div> : null}
    </>
  );
};

export default Nav;
