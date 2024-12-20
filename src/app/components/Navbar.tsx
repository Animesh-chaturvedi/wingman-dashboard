'use client';
import { useState } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import { FaTag } from "react-icons/fa6";
import { PiChatTeardropTextFill, PiChartPieSliceFill } from "react-icons/pi";



const Navbar = () => {
  const [selected, setSelected] = useState('summary');
  const [isModalOpen, setModalOpen] = useState(false);

  const tabs = [
    { id: 'summary', label: 'Summary', icon: <PiChartPieSliceFill className="text:sm md:text-lg" /> },
    { id: 'sales', label: 'Sales', icon: <FaTag className="text:sm md:text-lg" /> },
    { id: 'chats', label: 'Chats', icon: <PiChatTeardropTextFill className="text:sm md:text-lg" /> },
  ];

  return (
    <div className="z-10 bg-white border-b border-gray-200 flex items-center justify-between py-6 px-3 md:px-9 relative">
      <div className="md:hidden w-10 h-10 mr-2" onClick={() => setModalOpen(!isModalOpen)}><Image src="/Logo.png" alt="Logo" width={40} height={40} /></div>
      <div className="flex space-x-2 md:space-x-6">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href="#"
            onClick={() => setSelected(tab.id)}
            className={`flex text-sm md:text-lg/[22px] items-center space-x-2 sm:ml-0 font-medium px-4 py-3 rounded-full ${
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

      {/* <button
        className="block md:hidden text-gray-600"
        onClick={() => setModalOpen(!isModalOpen)}
      >
        <FaBars size={20} />
      </button> */}

      {/* Modal for Small Screen Tabs */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <ul className="space-y-6 text-center py-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a
                href="#"
                onClick={() => {
                  setSelected(tab.id);
                  setModalOpen(false);
                }}
                className={`flex justify-center items-center text-lg font-medium py-2 ${
                  selected === tab.id
                    ? 'bg-green-100 text-teal-900 rounded-lg'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default Navbar;
