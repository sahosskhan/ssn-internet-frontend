import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Package", path: "/our-packages" },
    { name: "Service", path: "/service" },
    { name: "Coverage Area", path: "/coverage-area" },
    { name: "Support", path: "/support" },
    { name: "Bill Pay", path: "/bill-pay" },
    { name: "About", path: "/about" },
  ];

  return (
    <div>
      <div className="fixed z-10  navbar backdrop-blur bg-[#0a0c1ecc]/90 border-b border-white/10">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white btn-ghost md:hidden lg:hidden xl:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-lg font-bold uppercase bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="transition-all duration-300 ease-in-out hover:text-teal-400 hover:pl-3 hover:scale-105"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <Link
                to="/connection"
                className="p-2 mt-2 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] font-bold shadow-md
                transition-all duration-300 ease-out
                hover:from-indigo-500 text-sm hover:to-teal-400 hover:text-white hover:scale-110 hover:shadow-2xl uppercase"
              >
                Get A New Connection
              </Link>
            </ul>
          </div>
          <Link
            to="/"
            className="p-2 lg:text-lg md:text-lg xl:text-lg rounded-xl bg-gradient-to-br from-purple-600 to-indigo-400 flex items-center justify-center shadow-md font-extrabold text-white"
          >
            SSN INTERNET
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden xl:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-white uppercase">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className="relative px-3 py-2 transition-all duration-300 ease-in-out hover:text-teal-300 hover:scale-110 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <Link
            to="https://www.facebook.com/sahosskhan/"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] font-bold shadow-md
             transition-all duration-300 ease-out
             hover:from-indigo-500 hover:to-teal-400 hover:text-white hover:scale-110 hover:shadow-2xl uppercase hidden md:flex lg:flex xl:flex"
          >
            Get A New Connection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
