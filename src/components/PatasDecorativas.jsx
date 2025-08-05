import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pata from "../assets/Patinhas Claras.png"; // nome sem espaço

export function PatasDecorativas({ quantidade = 20 }) {
  const [patinhas, setPatinhas] = useState([]);

  useEffect(() => {
    const novasPatinhas = Array.from({ length: quantidade }, () => ({
      top: Math.random() * 100, // porcentagem vertical
      left: Math.random() * 100, // porcentagem horizontal
      delay: Math.random() * 2, // delay aleatório na animação
      scale: 0.4 + Math.random() * 0.3, // tamanho aleatório
    }));
    setPatinhas(novasPatinhas);
  }, [quantidade]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {patinhas.map((pataInfo, index) => (
        <motion.img
          key={index}
          src={pata}
          alt="Pata"
          initial={{ opacity: 0.5, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: pataInfo.delay,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            top: `${pataInfo.top}%`,
            left: `${pataInfo.left}%`,
            transform: `scale(${pataInfo.scale})`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

