


import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a192f]">
     
      <div className="bg-[#1b1e29] py-8 mt-0">
        <div className="container flex flex-col items-center justify-center sm:flex-row sm:justify-between">
          <div className="hidden sm:block">
            <div className="flex items-center gap-[10px]"></div>
          </div>

          <div className="mt-10 sm:mt-0">
            <ul className="flex items-center justify-center gap-10">
              <li>
                <a
                  className="text-gray-400 font-[600]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 font-[600]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 text-14px">
              &copy; {year} Abdulkadir Mohamed - All right reserved.
            </p>
          </div>
        </div>
      </div>
      {/* ========= Footer Bottom end ========== */}
    </footer>
  );
};

export default Footer;


