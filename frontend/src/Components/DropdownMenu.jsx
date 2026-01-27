import React, { useState } from 'react'

const DropdownMenu = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      
    >
      {/* Trigger button */}
      <button className="px-3 hover:text-primary font-semibold flex items-center gap-1">
        {title}
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown content */}
      {isOpen && (
        <div onMouseLeave={() => setIsOpen(false)} className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-3 z-50 min-h-[160px]">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu