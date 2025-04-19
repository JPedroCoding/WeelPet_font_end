import logo from "../assets/logo 1.png";
import { useState, useEffect, useRef } from "react";



export function Header ()
{
    const headerRef = useRef();
    const Mobile =  useState(false);

    function verficarMobile(){
        useEffect(() =>{
            const width = headerRef.current?.offsetWidth || 0;
            width<700 ? setisMobile(true): setisMobile(false)

        })
        
    }

    return(
        <div className="min-h-screen bg-fundo">
      <header className="fixed top-0 left-0 w-full bg-orange-600 text-white z-50 max-h-[80px]  2xl:max-h-[110px] ">
        <div className=" mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12   py-4 flex justify-between items-center w-full">
          <img src={logo} alt="Logo" className="w-[150px] h-[60px] 2xl:w-[180px] 2xl:h-[90px]  " />
          <nav className=" my-auto flex justify-end gap-6 sm:gap-8  lg:gap-10 xl:gap-12 2xl:gap-16">
          <a href="" className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg  md:text-base  sm:text-sm   font-bold hover:text-orange-400 transition-colors">Home</a>
            <a href="" className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg  md:text-base  sm:text-sm   font-bold hover:text-orange-400 transition-colors">Sobre</a>
            <a href="" className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg  md:text-base  sm:text-sm font-bold hover:text-orange-400 transition-colors">Características</a>
            <a href="" className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg  md:text-base  sm:text-sm font-bold hover:text-orange-400 transition-colors">Login</a>
            <a href="" className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg  md:text-base  sm:text-sm font-bold hover:text-orange-400 transition-colors">Comprar</a>
          </nav>
        </div>
      </header>
      <div className="pt-16"></div>
    </div>
    )
}