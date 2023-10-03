


// import React from "react";

// const Footer = () => {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="bg-[#0a192f]">
     
//       <div className="bg-[#1b1e29] py-8 mt-0">
//         <div className="container flex flex-col items-center justify-center sm:flex-row sm:justify-between">
//           <div className="hidden sm:block">
//             <div className="flex items-center gap-[10px]"></div>
//           </div>

//           <div className="mt-10 sm:mt-0">
//             <ul className="flex items-center justify-center gap-10">
//               <li>
//                 <a
//                   className="text-gray-400 font-[600]"
//                   href="#about"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="text-gray-400 font-[600]"
//                   href="#services"
//                 >
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="text-gray-400 font-[600]"
//                   href="#portfolio"
//                 >
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="text-gray-400 font-[600]"
//                   href="#contact"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <p className="text-gray-400 text-14px">
//               &copy; {year} Abdulkadir Mohamed - All right reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* ========= Footer Bottom end ========== */}
//     </footer>
//   );
// };

// export default Footer;

// Import Link from react-router-dom




import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a192f]">
      <div className="bg-[#1b1e29] py-8 pr-60 mt-0">
        <div className="container flex flex-col items-center justify-center sm:flex-row sm:justify-between  ">
          <div className="hidden sm:block">
            <div className="flex items-center gap-[10px]"></div>
          </div>

          <div className="mt-10 sm:mt-0">
            <ul className="flex items-center justify-center gap-10">
              <li>
                <Link to="/about" className="text-gray-400 font-[600]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 font-[600]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 font-[600]">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 font-[600]">
                  Contact
                </Link>
              </li>
              {/* Add the copyright text as a list item */}
              <li>
                <p className="text-gray-400 text-14px">
                  &copy; {year} Abdulkadir Mohamed - All rights reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

