import logo from "../assets/logo 1.png";
import { useState, useEffect, useRef } from "react";

export function Header() {
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
    <div >
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full bg-orange-600 text-white z-50 max-h-[80px] 2xl:max-h-[110px]"
      >
        <div className="mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 py-4 flex justify-between items-center w-full">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] h-[60px]  2xl:w-[180px] 2xl:h-[90px]"
          />

          {/* BOTÃO MENU - muda ícone quando abre */}
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

        {/* MENU MOBILE COM ANIMAÇÃO */}
        <div
          className={`transition-all h-full  duration-300 ease-in-out overflow-hidden fixed right-0 ${
            menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {isMobile && (
            <div className="   flex flex-col bg-orange-600  w-fit   gap-4 px-4 pb-4 pt-2 ">
              <a className="font-bold hover:text-orange-400">Home</a>
              <a className="font-bold hover:text-orange-400">Sobre</a>
              <a className="font-bold hover:text-orange-400">Características</a>
              <a className="font-bold hover:text-orange-400">Login</a>
              <a className="font-bold hover:text-orange-400">Comprar</a>
            </div>
          )}
        </div>
      </header>

      <div className="pt-20" />
    </div>
  );
}

