'use client'
import { useState } from 'react';
import { AiOutlineTag, AiOutlineMessage, AiOutlineCompass } from 'react-icons/ai';

const Navbar = () => {
  const [selected, setSelected] = useState('summary');

  const tabs = [
    { id: 'summary', label: 'Summary', icon: <AiOutlineCompass className="text-lg" /> },
    { id: 'sales', label: 'Sales', icon: <AiOutlineTag className="text-lg" /> },
    { id: 'chats', label: 'Chats', icon: <AiOutlineMessage className="text-lg" /> },
  ];

  return (
    <div className="z-10 bg-white border-b border-gray-200 flex items-center py-6 px-9">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href="#"
            onClick={() => setSelected(tab.id)}
            className={`flex text-lg/[22px] items-center space-x-2 font-medium  px-4 py-3 rounded-full ${
              selected === tab.id
                ? 'bg-green-100 text-teal-900'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            style={{
              letterSpacing: '-0.01em',
            }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
