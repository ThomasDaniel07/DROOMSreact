import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {FaFacebook, FaInstagramSquare } from 'react-icons/fa';

const Footer =  ()=>{
    return (
        <div className="w-screen p-3 flex flex-col items-center lg:w-full lg:p-4">
            <p className="text-center border-b-4 border-blue-500 lg:w-[500px]">DROOMS ©COPYRIGHT</p>
            <p className="text-justify">Drooms es un aplicativo web creado con el fin de ayudar a las entidades que proporcionan alimentos en los comedores</p>         
            <div className='lg:hidden'>
                <ul className="flex">
                    <li><a href="/"><HiOutlineMail fill="#477BFF" size={50}/></a></li>
                    <li><a href="/"><FaFacebook fill="#477BFF" size={50}/></a></li>
                    <li><a href="/"><FaInstagramSquare fill="#477BFF" size={50}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;