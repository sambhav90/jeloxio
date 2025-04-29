"use client"
import Link from "next/link"
import React, {useState} from "react";
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className="header-bg flex justify-center">
        <div className="flex justify-between items-center h-[50px] w-[1280px] mx-4">
          <div className="text-2xl font-semibold text-white">
            <h3>
                <Link href="/">Jeloxio</Link>
            </h3>
          </div>
          <div className="relative md:hidden block">
          <div onClick={toggleMenu} className="cursor-pointer">
            {!isOpen?<svg
              width="37"
              height="37"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 14H18H25"
                stroke="#F6F7F7"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M11 24H24H37"
                stroke="#F6F7F7"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M11 34H21H31"
                stroke="#F6F7F7"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>:
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 5.99994C17.8124 5.81247 17.5581 5.70715 17.293 5.70715C17.0278 5.70715 16.7735 5.81247 16.586 5.99994L12 10.5859L7.41397 5.99994C7.22644 5.81247 6.97213 5.70715 6.70697 5.70715C6.44181 5.70715 6.1875 5.81247 5.99997 5.99994C5.8125 6.18747 5.70718 6.44178 5.70718 6.70694C5.70718 6.9721 5.8125 7.22641 5.99997 7.41394L10.586 11.9999L5.99997 16.5859C5.8125 16.7735 5.70718 17.0278 5.70718 17.2929C5.70718 17.5581 5.8125 17.8124 5.99997 17.9999C6.1875 18.1874 6.44181 18.2927 6.70697 18.2927C6.97213 18.2927 7.22644 18.1874 7.41397 17.9999L12 13.4139L16.586 17.9999C16.7735 18.1874 17.0278 18.2927 17.293 18.2927C17.5581 18.2927 17.8124 18.1874 18 17.9999C18.1874 17.8124 18.2928 17.5581 18.2928 17.2929C18.2928 17.0278 18.1874 16.7735 18 16.5859L13.414 11.9999L18 7.41394C18.1874 7.22641 18.2928 6.9721 18.2928 6.70694C18.2928 6.44178 18.1874 6.18747 18 5.99994Z" fill="#fff"/>
            </svg>}

          </div>
        </div>
        {isOpen && <div className="absolute top-[49px] left-0 w-[100%] bg-[#181513] text-white p-4 z-[5]">
          <ul>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Education</li>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Sports</li>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Biography</li>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Business</li>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Health</li>
            <li className="py-2 hover:text-[#f1eded] cursor-pointer">Politics</li>
          </ul>
            </div>}
          <div className="md:block hidden">
          <ul className="flex space-x-4 text-base font-medium text-white">
            <li className="hover:text-[#f1eded] cursor-pointer">Education</li>
            <li className="hover:text-[#f1eded] cursor-pointer">Sports</li>
            <li className="hover:text-[#f1eded] cursor-pointer">Biography</li>
            <li className="hover:text-[#f1eded] cursor-pointer">Business</li>
            <li className="hover:text-[#f1eded] cursor-pointer">Health</li>
            <li className="hover:text-[#f1eded] cursor-pointer">Politics</li>
          </ul>

          </div>
          
        </div>
      </div>
    );
  }