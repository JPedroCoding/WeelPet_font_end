import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import fundoGame from "../assets/pixel.png";
import bt from "../assets/Play.png";
import cisco from "../assets/Rectangle.png";
import musica from "../assets/musica.mp3";

export function Game({ isDarkTheme }) {
  const [ciscos, setCiscos] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const novosCiscos = Array.from({ length: 25 }, () => ({
      top: Math.random() * 100, // posição vertical
      left: Math.random() * 100, // posição horizontal
      delay: Math.random() * 3, // atraso
      scale: 0.5 + Math.random() * 0.8, // escala
    }));
    setCiscos(novosCiscos);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("Erro ao tocar áudio automaticamente:", error);
        setIsPlaying(false); // Reverte o estado se o autoplay falhar
      });
    }
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log("Erro ao tocar áudio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
      {/* Fundo com quadradinhos piscando */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {ciscos.map((info, index) => (
          <motion.img
            key={index}
            src={cisco}
            alt="Cisco decorativo"
            initial={{ opacity: 0.2, y: -10 }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
            transition={{
              delay: info.delay,
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: `${info.top}%`,
              left: `${info.left}%`,
              transform: `scale(${info.scale})`,
            }}
          />
        ))}
      </div>

      {/* Imagem principal */}
      <img src={fundoGame} alt="" className="sm:w-4xl w-6xl -mt-30 relative z-10" />

      {/* Botão Play pulsando */}
      <div className=" md:-mr-160  relative z-10 cursor-pointer">
        <motion.img
          src={bt}
          alt="Play"
          className="w-20 md:w-30 sm:-mt-20 -mt-10 sm:w-30  md:-mt-105"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Controle de música */}
      <div className="absolute bottom-4 right-4 z-20">
        <audio ref={audioRef} loop>
          <source src={musica} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <button
          onClick={togglePlay}
          className={`px-4 py-2 rounded text-white font-semibold ${
            isDarkTheme ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPlaying ? "Pausar Música" : "Tocar Música"}
        </button>
      </div>
    </div>
  );
}