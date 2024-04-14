import React from 'react';

const Footer = (props) => {
  return (
    <footer className="max-sm:text-[0.7rem] flex p-8 border-solid border-t justify-center items-center gap-1 text-[#999]">
      &copy; 2024{' '}
      <span className="text-[blue] sm:hidden max-sm:text-[0.7rem]">
        Chingu.
      </span>
      <span className="flex items-center text-[blue] max-sm:hidden">
        {props.icon}v48-tier1-team01
      </span>{' '}
      All rights reserved.
    </footer>
  );
};

export default Footer;
