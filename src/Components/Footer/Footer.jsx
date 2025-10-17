import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content border-base-300  px-10 py-4">
        <aside className="grid-flow-col items-center ">
          <img className="h-10" src="/assets/logo.png" alt="HERO.IO Logo" />
          <p>HERO.IO</p>
        </aside>
        
        <nav className="md:place-self-center md:justify-self-end">
          <p>Social Links</p>
          <div className="grid grid-flow-col gap-4">
            
            <a>
            <FaXTwitter />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
             <FaFacebook />
            </a>
          </div>
        </nav>
      </footer>

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} -  All right reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
