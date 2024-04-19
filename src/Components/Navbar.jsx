import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
   
          <a href="/">Language App</a>
        </div>
        <ul className="flex space-x-6">
       
          {/* logout */}
          <li>
            <p
              onClick={() => { 
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="text-base font-medium text-gray-600 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
            >
              Logout
            </p>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
