// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglesidebar = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white shadow-md relative z-50 navbar">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
//         <div className="flex justify-between items-center h-16 container">
//           {/* 1. Logo */}
//           <div className="shrink-0 flex items-center ">
//             <Link to={"/"} className="text-2xl font-bold text-blue-600 ">
//               <span className="text-white">Job</span>
//               <span className="text-[#3498db]">Sync</span>
//             </Link>
//           </div>

//           {/* 2. Desktop menu {Hiddne on mobile, visible on medium screens and up} */}
//           <div className="hidden md:flex space-x-8 items-center nav-links">
//             <Link to={"/"} className="text-gray-700 hover:text-blue-600">
//               home
//             </Link>
//             <Link
//               to={"/browse-job"}
//               className="text-gray-700 hover:text-blue-600"
//             >
//               Browse Job
//             </Link>
//             <Link to={"/profile"} className="text-gray-700 hover:text-blue-600">
//               Profile
//             </Link>
//             <Link className="text-gray-700 hover:text-blue-600">companies</Link>
//           </div>
//           {/* 3. Mobile Hamburger Button (Visible only on mobile) */}

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={togglesidebar}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none"
//             >
//               {/* Icon change based on isOpen state (Hamburger vs X) */}
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6 "
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 4. Mobile sideBar  dark overLay (Clicking it close the menu)*/}

//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 md:hidden"
//           onClick={togglesidebar}
//         ></div>
//       )}
//       {/* 5. The mobile sidebar itself */}
//       <div
//         className={`fixed inset-y-0 right-0 w-64 bg-linear-to-t from-indigo-200 to-gray shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="px-4 pt-5 pb-4 flex flex-col h-full  text-black  in-hover:bg-gray-400">
//           <Link
//             to={"/"}
//             className="text-2xl font-bold text-blue-600 mb-4 border-b pb-2 "
//           >
//             <span className="text-white">Job</span>
//             <span className="text-[#3498db]">Sync</span>
//           </Link>
//           <Link
//             to={"/browse-job"}
//             className="text-lg text-gray-700 hover:text-blue-600"
//           >
//             Browse Jobs
//           </Link>
//           <Link
//             to={"/profile"}
//             className="text-lg text-gray-700 hover:text-blue-600"
//           >
//             Profile
//           </Link>
//           <Link
//             to={"/post-job"}
//             className="text-lg text-gray-700 hover:text-blue-600"
//           >
//             Post Job
//           </Link>
//           <Link
//             to={"/post-job"}
//             className="text-lg text-gray-700 hover:text-blue-600"
//           >
//             Post Job
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;


import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To highlight whichever link is currently active

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Nav links data with SVG icons
  const navLinks = [
    {
      name: 'Browse Job',
      path: '/browse-job',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'profile',
      path: '/profile',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'My Applications',
      path: '/my-applications',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
              JS
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              JobSync
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/employer/post-job"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR DRAWER --- */}

      {/* 1. Glassmorphism Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* 2. Slide-out Drawer Panel */}
      <div
        className={`fixed 
           top-0 left-0 bottom-0 w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col justify-between h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Upper Content */}
        <div>
          {/* Drawer Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                JS
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                JobSync
              </span>
            </div>

            {/* Close Button */}
            <button
              onClick={toggleSidebar}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links Group */}
          <div className="p-4 space-y-1.5">
            <p className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Menu
            </p>

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleSidebar}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold shadow-xs'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className={isActive ? 'text-blue-600' : 'text-gray-400'}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Fixed Action Section */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <Link
            to="/employer/post-job"
            onClick={toggleSidebar}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Post a Job</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar