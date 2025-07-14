import logo from "../assets/WellPet logo.png";
import { useState, useEffect, useRef } from "react";
import logo_black from "../assets/logo_black.png";



export function Header({ isDarkTheme, setIsDarkTheme }) {
  const headerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkHeaderWidth = () => {
      const width = headerRef.current?.offsetWidth || 0;
      setIsMobile(width < 700);
    };

    checkHeaderWidth();
    window.addEventListener("resize", checkHeaderWidth);
    return () => window.removeEventListener("resize", checkHeaderWidth);
  }, []);

  return (
    <div>
      <header
        ref={headerRef}
        className={`fixed top-4 left-4 right-4 ${isDarkTheme ? "bg-headerblack" :"bg-header" } ${isDarkTheme ? "border border-white": "border border-black"} text-white z-50 max-h-[90px] 2xl:max-h-[120px] rounded-3xl px-6 py-4 shadow-md`}
      >
        <div className="mx-auto max-w-7xl flex flex-col items-center">
          {/* Parte superior: Logo e Navegação */}
          <div className="w-full flex justify-between items-center">
            
            { isDarkTheme ?
            <img
               src={logo_black} 
              alt="Logo"
              className="w-[150px] h-[70px] 2xl:w-[180px] 2xl:h-[90px] object-contain"
            />  
            : <img
               src={logo} 
              alt="Logo"
              className="w-[150px] h-[60px] 2xl:w-[180px] 2xl:h-[90px] object-contain"
            />}

            {isMobile ? (
              <button
                className="text-white text-3xl font-bold transition-transform duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir/Fechar menu"
              >
                {menuOpen ? "✖" : "☰"}
              </button>
            ) : (
              <nav className="my-auto flex justify-end gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
                <a className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold hover:text-orange-400 transition-colors">Home</a>
                <a className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold hover:text-orange-400 transition-colors">Sobre</a>
                <a className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold hover:text-orange-400 transition-colors">Características</a>
                <a className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold hover:text-orange-400 transition-colors">Login</a>
                <a className="text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold hover:text-orange-400 transition-colors">Comprar</a>
              </nav>
            )}
          </div>

          {/* Seção Tema: Switch Claro e Escuro */}
          <div className="w-full mt-4 pt-2 pb-2 rounded-b-3xl " >
            <div className="mx-auto max-w-7xl flex justify-start items-center">
              <div
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className={`relative w-16 h-8 max-sm:w-14 max-sm:h-7 ${isDarkTheme ? "bg-gray-300" : "bg-white"} rounded-full cursor-pointer`}
              >
                <span
                  className={`absolute w-6 h-6 top-0.5 ${isDarkTheme ? "bg-white" : "bg-black"} rounded-full transition-transform duration-300 ease-in-out ${
                    isDarkTheme ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden fixed right-4 ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {isMobile && (
            <div className="flex flex-col bg-orange-600 w-fit gap-4 px-4 pb-4 pt-2 rounded-b-3xl">
              <a className="font-bold hover:text-orange-400">Home</a>
              <a className="font-bold hover:text-orange-400">Sobre</a>
              <a className="font-bold hover:text-orange-400">Características</a>
              <a className="font-bold hover:text-orange-400">Login</a>
              <a className="font-bold hover:text-orange-400">Comprar</a>
            </div>
          )}
        </div>
      </header>

      <div className="pt-24" />
    </div>
  );
}