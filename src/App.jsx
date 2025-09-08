import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { PatasDecorativas } from "./components/PatasDecorativas";
import { PatasDecorativasBlack } from "./components/PatasDecorativasBlack";
import { Body } from "./components/Body";
import { useState, useEffect } from "react";
import { Referencias } from "./components/Referencias";
import { Login } from "./components/Login";
import { Sobre } from "./components/Sobre";
import { Dispenser } from "./components/Dispenser";
import { Game } from "./components/Game";
import { CriarConta } from "./components/CriarConta";
import { Projeto } from "./components/Projeto";
import { Tutorial } from "./components/Tutorial";

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation(); // rota atual

  // aplica/remover classe "dark" conforme o tema
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  // identifica se está na página /game
  const isGamePage = location.pathname === "/game";

  return (
    <div
      className={`min-h-screen relative ${
        isGamePage
          ? "" // fundo especial só no /game
          : isDarkTheme
          ? "bg-blackfundo"
          : "bg-fundo"
      }`}
      style={isGamePage ? { backgroundColor: "#01203d" } : {}}
    >
      {/* Cabeçalho fixo em todas as páginas */}
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

      {/* Patas decorativas (somente fora da página game) */}
      {!isGamePage && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {isDarkTheme ? (
            <PatasDecorativasBlack quantidade={17} />
          ) : (
            <PatasDecorativas quantidade={15} />
          )}
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Body isDarkTheme={isDarkTheme} />} />
          <Route path="/game" element={<Game isDarkTheme={isDarkTheme} />} />
          <Route
            path="/criar-conta"
            element={<CriarConta isDarkTheme={isDarkTheme} />}
          />
          <Route path="/login" element={<Login isDarkTheme={isDarkTheme} />} />
          <Route path="/sobre" element={<Sobre isDarkTheme={isDarkTheme} />} />
          <Route
            path="/Referencias"
            element={<Referencias isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/Dispenser"
            element={<Dispenser isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/projeto"
            element={<Projeto isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/tutorial"
            element={<Tutorial isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </div>
    </div>
  );
}
