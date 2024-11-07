import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Server, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">ServerHub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/plans" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Plans
              </Link>
              <Link to="/support" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md">
                Support
              </Link>
              <Link to="/login" className="bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-md font-medium">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/plans"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Plans
            </Link>
            <Link
              to="/support"
              className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/login"
              className="bg-white text-indigo-600 hover:bg-indigo-50 block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;