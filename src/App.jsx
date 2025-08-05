import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { PatasDecorativas } from './components/PatasDecorativas';
import { PatasDecorativasBlack } from './components/PatasDecorativasBlack';
import { Body } from './components/Body';
import { useState, useEffect } from 'react';
import { Referencias } from './components/Referencias';
import { Login } from './components/Login';
import { Sobre } from './components/Sobre';
import { Dispenser } from './components/Dispenser';
import { Game } from './components/Game';
import { CriarConta } from './components/CriarConta';

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-blackfundo' : 'bg-fundo'} relative`}>
      <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        {isDarkTheme ? <PatasDecorativasBlack quantidade={17} /> : <PatasDecorativas quantidade={15} />}
      </div>
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Body isDarkTheme={isDarkTheme} />} /> {/* Home usa o Body existente */}
          <Route path="/game" element={<Game isDarkTheme={isDarkTheme} />} />
          <Route path="/criar-conta" element={<CriarConta isDarkTheme={isDarkTheme} />} />
          <Route path="/login" element={<Login isDarkTheme={isDarkTheme} />} />
          <Route path="/sobre" element={<Sobre isDarkTheme={isDarkTheme} />} />
          <Route path="/Referencias" element={<Referencias isDarkTheme={isDarkTheme} />} />
          <Route path="/Dispenser" element={<Dispenser isDarkTheme={isDarkTheme} />} />
        </Routes>
      </div>
    </div>
  );
}