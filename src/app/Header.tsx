'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/housing', label: 'HOUSING' },
    { href: '/urban-habits', label: 'URBAN HABITS' },
    { href: '/urban-nature', label: 'URBAN NATURE' },
    { href: '/contact', label: 'CONTACT' },
    { href: '/about', label: 'ABOUT' },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="grid gap-2 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        {/* logo section */}
        <div className="grid sm:flex sm:justify-between max-w-screen-xl mx-auto">
          <div className='flex items-center justify-between w-full'>
            <Link href="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
                className="h-12"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* auth buttons */}
          <div className='flex items-center gap-3 mt-2 lg:mt-0'>
            <Link href="/login" className="border-2 border-orange-800 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-50">Log in</Link>
            <Link href="/register" className="bg-orange-700 text-white rounded-lg px-4 py-2 hover:bg-orange-800">Get Started</Link>
          </div>
        </div>

        {/* nav tabs */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-2 lg:mt-4 p-2 lg:p-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 pr-4 pl-3 duration-200 ${
                    pathname === href ? 'text-orange-700 underline' : 'text-gray-700'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
