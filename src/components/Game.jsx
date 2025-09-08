import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fundoGame from "../assets/bgGame.jpg";
import bt from "../assets/Play.png";
import cisco from "../assets/Rectangle.png";

export function Game({ isDarkTheme }) {
  const [ciscos, setCiscos] = useState([]);

  useEffect(() => {
    const novosCiscos = Array.from({ length: 25 }, () => ({
      top: Math.random() * 100, // posição vertical
      left: Math.random() * 100, // posição horizontal
      delay: Math.random() * 3, // atraso
      scale: 0.5 + Math.random() * 0.8, // escala
    }));
    setCiscos(novosCiscos);
  }, []);

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
      <img src={fundoGame} alt="" className="w-xl -mt-6 relative z-10" />

      {/* Botão Play pulsando */}
      <div className="-mr-160 relative z-10">
        <motion.img
          src={bt}
          alt="Play"
          className="w-30 -mt-65"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
