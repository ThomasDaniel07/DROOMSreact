import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import Logo from '../assets/LogoDrooms.png'

const NavBar = ()=>{


  const [nav,setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return(
    <div className="fixed w-screen h-[100px] flex flex-wrap justify-around items-center px-4 bg-[#477BFF] text-white z-40">
      <div className="flex flex-wrap items-center justify-between">
        <img src={Logo} alt=""  width={70}/>
        <h1 className="font-bold text-4xl text-white">DROOMS</h1>
      </div>

      <ul className="md:flex hidden">
        <li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Info</li>
        <li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Escanear QR</li>
        <li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Mostrar Listado</li>
        <li id='navElemnt' className="text-white hover:bg-white hover:text-black hover:rounded-3xl hover:drop-shadow-md p-[15px] font-['SF Compact Display'] font-semibold drop-shadow-md">Hacer Anotacioes</li>
      </ul>

      {/* Hamburger button */}

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="cursor-pointer text-3xl text-white" /> : <FaTimes className="cursor-pointer text-3xl text-white" />}
      </div>

      {/* Movile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#477BFF] flex flex-col justify-center items-center z-50'}>
        <li className="py-6 text-4xl">Informacion</li>
        <li className="py-6 text-4xl">Escanear QR</li>
        <li className="py-6 text-4xl">Mostrar Listado</li>
      </ul>

      {/* Social Menu */}

      <div className="hidden lg:flex fixed flex-col top-[34%] left-[-5px]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-blue-600 p-[10px]">
              Facebook <FaFacebook size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-purple-600 p-[10px]">
              Instagram<FaInstagramSquare size={35}/>
            </a>
          </li>
	        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-95px] hover:ml-[-20px] duration-300 ">
            <a href="/" className="flex justify-between items-center w-full text-gray-100 font-semibold bg-red-600 p-[10px]">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;