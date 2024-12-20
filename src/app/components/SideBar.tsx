'use client'
import Image from 'next/image';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { PiUsersFourFill } from "react-icons/pi";
import { useState } from 'react';
import { BsFillChatFill } from "react-icons/bs";

const Sidebar = () => {
  const [selected, setSelected] = useState("home");

  const menuItems = [
    { id: "home", icon: <AiFillHome />, link: "/" },
    { id: "chats", icon: <BsFillChatFill />, link: "/chats" },
    { id: "sales", icon: <PiUsersFourFill />, link: "/sales" },
  ];

  return (
    <div className="hidden md:flex sticky top-0 bg-teal-800 text-white w-15 h-screen flex-col items-center py-6" style={{minWidth:"60px", width:"60px"}}>
      <div className="mb-8">
        <Image src="/Logo.png" alt="Logo" width={32} height={32} />
      </div>

      <div className="w-[28] h-[1px] bg-[#134E48] mb-8 mx-4"></div>
      <nav className="flex flex-col space-y-6 flex-grow">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setSelected(item.id)}
            className={`flex justify-center items-center w-9 h-9 rounded-lg ${
              selected === item.id ? "bg-white text-teal-800 p-2" : "hover:bg-teal-700"
            }`}
          >
            <div className={`${selected === item.id ? "text-[20px]" : "text-[20px] text-white"}`}>
              {item.icon}
            </div>
          </a>
        ))}
      </nav>
      <div className="mt-auto">
        <a
          href="/settings"
          onClick={() => setSelected("settings")}
          className={`flex justify-center items-center w-10 h-10 rounded-lg ${
            selected === "settings" ? "bg-white text-teal-800 p-2" : "hover:bg-teal-700"
          }`}
        >
          <AiFillSetting className={`${selected === "settings" ? "text-[20px]" : "text-[20px] text-white"}`} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
