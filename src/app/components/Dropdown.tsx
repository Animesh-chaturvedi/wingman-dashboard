"use client"
import { useState } from 'react';

const Dropdown = ({ onChange }: { onChange: (value: string) => void }) => {
  const [selected, setSelected] = useState('7 days');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['7 days', '15 days', '1 month'];

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white border border-gray-300 rounded-md px-4 py-2 text-[1rem]/[1.5rem] flex items-center space-x-2 shadow-sm hover:border-gray-400"
      >
        <span>{selected}</span>
        <svg
          className={`w-4 h-4 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-full z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
