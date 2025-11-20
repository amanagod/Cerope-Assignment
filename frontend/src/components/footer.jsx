// Footer.jsx

import React from 'react';

// You will replace this with your actual logo component or SVG file path
const Logo = () => (
  <div className="flex items-center gap-2">
    {/* Placeholder for the Cerope logo icon */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-6 h-6 text-white" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Simple infinity or loop icon placeholder */}
      <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
      <path d="M7 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
    </svg>
    <span className="text-2xl font-bold tracking-wider">Cerope</span>
  </div>
);

// Helper component for rendering a single column of links
const LinkColumn = ({ title, links }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {links.map((link, index) => (
      // For a real app, replace <a> with <Link> from react-router-dom
      <a 
        key={index}
        href={link.href} 
        className="text-gray-400 hover:text-white transition duration-200 text-sm"
      >
        {link.name}
      </a>
    ))}
  </div>
);

export default function Footer() {

  // --- Data for the Link Columns ---
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Features', href: '#' },
    { name: "FAQ's", href: '#' },
  ];

  const products = [
    { name: 'User Styling', href: '#' },
    { name: '~ Launching Soon', href: '#', comingSoon: true },
    { name: 'Price Comparison', href: '#' },
    { name: 'Creator Space', href: '#' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Copyright Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Terms and Conditions', href: '#' },
  ];

  return (
    <footer className="w-full bg-black text-white px-6 sm:px-10 lg:px-20 pt-16">
      
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Logo/Branding and Link Columns */}
        <div className="flex flex-col lg:flex-row justify-between pb-12">
          
          {/* 1. Branding Column (Full width on small screens, fixed width on large) */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 pr-4">
            <Logo />
            <p className="mt-6 text-gray-400 text-base max-w-sm leading-relaxed">
              Revolutionizing fashion with AI-powered styling solutions.
            </p>
          </div>
          
          {/* 2. Link Columns Container (Takes up remaining 2/3 space on large screens) */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-between gap-y-10 lg:gap-x-10">
            
            <LinkColumn title="Quick Links" links={quickLinks} />
            
            {/* Products Column with the "Launching Soon" line break */}
            <div className="flex flex-col space-y-3">
              <h3 className="text-lg font-semibold text-white mb-2">Products</h3>
              
              {/* Individual Products Links */}
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm">User Styling</a>
              
              {/* Launching Soon styled to match the image */}
              <span className="text-gray-400 text-sm">
                <span className="opacity-70">~</span> Launching Soon
              </span>
              
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm">Price Comparison</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 text-sm">Creator Space</a>
            </div>

            <LinkColumn title="Policies" links={policies} />

          </div>
        </div>

        {/* BOTTOM SECTION: Separator and Copyright */}
        <div className="pt-8 pb-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            ©2025 Cerope. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}