import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuCategories = [
    {
      title: "Discover",
      links: [
        {
          name: "Browse Job",
          path: "/browse-job",
          icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
        {
          name: "Browse Companies",
          path: "/companies",
          icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        },
      ],
    },
    {
      title: "My Account",
      links: [
        {
          name: "Dashboard",
          path: "/profile",
          icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        },
        {
          name: "Saved Jobs",
          path: "/saved",
          icon: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z",
        },
      ],
    },
  ];

  return (
    <>
      {/* --- DESKTOP TOP BAR --- */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-300">
                JS
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                JobSync
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 items-center bg-gray-50/80 p-1.5 rounded-full border border-gray-100">
              {menuCategories[0].links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/employer/post-job"
                className="bg-gray-900 hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Post Job
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={toggleSidebar}
              className="md:hidden relative w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- FLOATING MOBILE SIDEBAR --- */}

      {/* Dark Blur Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 md:hidden transition-opacity duration-400 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* The Floating Panel */}
      <div
        className={`fixed  top-4 left-4 bottom-4 w-[calc(100%-2rem)] max-w-sm bg-white/95 backdrop-blur-xl z-50 rounded-4xl shadow-2xl border border-white/40 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden flex flex-col overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-[-120%]"
        }`}
      >
        <div className="flex flex-col h-full w-full overflow-y-auto ">
          {/* Top User Profile Snippet */}
          <div className="pt-8 px-8 pb-6 bg-linear-to-b from-blue-50/50 to-transparent">
            <div className="flex justify-between items-start mb-6 ">
              {/* Fake Avatar - Connect to your UserContext later! */}
              <div className="w-16 h-16 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center text-indigo-600 font-bold text-xl">
                M
              </div>
              <button
                onClick={toggleSidebar}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600  hover:text-gray-900 shadow-sm transition-colors absolute right-3 top-3"
              >
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                Mayurkumar
              </h3>
              <p className="text-sm font-medium text-blue-600 mt-1">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Categorized Navigation */}
          <div className="px-8 py-4 flex-1">
            {menuCategories.map((category, idx) => (
              <div key={idx} className="mb-6">
                <p className="px-4 text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  {category.title}
                </p>
                <div className="space-y-1">
                  {category.links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={toggleSidebar}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 ${
                            isActive ? "text-white" : "text-gray-400"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d={link.icon}
                          />
                        </svg>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Bottom Action */}
          <div className="p-4 bg-white border-t border-gray-100">
            <Link
              to="/employer/post-job"
              onClick={toggleSidebar}
              className="flex items-center justify-center w-full bg-gray-900 text-white text-sm font-bold py-4 px-4 rounded-2xl shadow-xl shadow-gray-900/20 active:scale-95 transition-transform"
            >
              Post a New Job
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
