import { NavLink, useNavigate } from 'react-router-dom'; // Importe useNavigate junto com NavLink
import logo from '../assets/WellPet logo.png';
import logo_black from '../assets/logo_black.png';
import { useState, useEffect, useRef } from 'react';

export function Header({ isDarkTheme, setIsDarkTheme }) {
  const headerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    const checkHeaderWidth = () => {
      const width = headerRef.current?.offsetWidth || 0;
      setIsMobile(width < 700);
    };

    checkHeaderWidth();
    window.addEventListener('resize', checkHeaderWidth);
    return () => window.removeEventListener('resize', checkHeaderWidth);
  }, []);

  const handleLogoClick = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div>
      <header
        ref={headerRef}
        className={`fixed top-4 left-4 right-4 ${
          isDarkTheme ? 'bg-headerblack' : 'bg-header'
        } ${isDarkTheme ? 'border border-white' : 'border border-black'} text-white z-50 max-h-[90px] 2xl:max-h-[120px] rounded-3xl px-6 py-4 shadow-md`}
      >
        <div className="mx-auto max-w-7xl flex flex-col items-center">
          {/* Parte superior: Logo e Navegação */}
          <div className="w-full flex justify-between items-center">
            {isDarkTheme ? (
              <img
                src={logo_black}
                alt="Logo"
                className="w-[150px] h-[60px] 2xl:w-[180px] 2xl:h-[90px] object-contain cursor-pointer"
                onClick={handleLogoClick} // Adiciona o evento de clique
              />
            ) : (
              <img
                src={logo}
                alt="Logo"
                className="w-[150px] h-[60px] 2xl:w-[180px] 2xl:h-[90px] object-contain cursor-pointer"
                onClick={handleLogoClick} // Adiciona o evento de clique
              />
            )}

            {isMobile ? (
              <button
                className="text-white text-3xl font-bold transition-transform duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir/Fechar menu"
              >
                {menuOpen ? '✖' : '☰'}
              </button>
            ) : (
              <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
                <nav className="flex items-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
                  <NavLink
                    to="/game"
                    className={({ isActive }) =>
                      `text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`
                    }
                  >
                    Game
                  </NavLink>
                  <NavLink
                    to="/dispenser"
                    className={({ isActive }) =>
                      `text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`
                    }
                  >
                    Dispenser
                  </NavLink>
                  <NavLink
                    to="/sobre"
                    className={({ isActive }) =>
                      `text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`
                    }
                  >
                    Sobre nós
                  </NavLink>
                  <NavLink
                    to="/referencias"
                    className={({ isActive }) =>
                      `text-lg 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm font-bold transition-colors ${
                        isActive ? 'text-orange-400' : 'hover:text-orange-400'
                      }`
                    }
                  >
                    Referências
                  </NavLink>
                </nav>
                <div className="ml-6">
                  <div
                    className="w-10 h-10 bg-gray-400 rounded-full cursor-pointer"
                    aria-label="Perfil do usuário"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Seção Tema: Switch Claro e Escuro e Botões */}
          <div className="w-full mt-4 pt-2 pb-2 rounded-b-3xl">
            <div className="mx-auto max-w-7xl flex justify-between items-center">
              <div
                onClick={() => setIsDarkTheme(!isDarkTheme)}
                className={`relative w-16 h-8 max-sm:w-14 max-sm:h-7 ${
                  isDarkTheme ? 'bg-white' : 'bg-gray-300'
                } rounded-full cursor-pointer`}
              >
                <span
                  className={`absolute w-6 h-6 top-0.5 ${
                    isDarkTheme ? 'bg-gray-500' : 'bg-black'
                  } rounded-full transition-transform duration-300 ease-in-out ${
                    isDarkTheme ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </div>
              <div className="flex gap-2">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-4 py-2  text-white rounded-lg font-bold transition-colors ${
                      isActive ? 'bg-orange-600' : 'hover:bg-orange-600'
                    } ${isDarkTheme ?"bg-headerblack" : "bg-header"}`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/criar-conta"
                  className={({ isActive }) =>
                    `px-4 py-2  text-white rounded-lg font-bold transition-colors ${
                      isActive ? 'bg-orange-600' : 'hover:bg-orange-600'
                    } ${isDarkTheme ?"bg-headerblack" : "bg-header"}`
                  }
                >
                  Criar conta
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden fixed right-4 ${
            menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {isMobile && (
            <div className="flex flex-col bg-orange-600 w-fit gap-4 px-4 pb-4 pt-2 rounded-b-3xl">
              <NavLink
                to="/game"
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-orange-400' : 'hover:text-orange-400'}`
                }
                onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
              >
                Game
              </NavLink>
              <NavLink
                to="/dispenser"
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-orange-400' : 'hover:text-orange-400'}`
                }
                onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
              >
                Dispenser
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-orange-400' : 'hover:text-orange-400'}`
                }
                onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
              >
                Sobre nós
              </NavLink>
              <NavLink
                to="/referencias"
                className={({ isActive }) =>
                  `font-bold ${isActive ? 'text-orange-400' : 'hover:text-orange-400'}`
                }
                onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar
              >
                Referências
              </NavLink>
            </div>
          )}
        </div>
      </header>

      <div className="pt-24" />
    </div>
  );
}