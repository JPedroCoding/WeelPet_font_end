import { useState } from "react";
import dispenser from "../assets/fundo.png"; // imagem sem fundo
import game from "../assets/game.png";
import projeto from "../assets/projeto.png";
import app from "../assets/app.png"; // mini imagem do app
import { useNavigate } from "react-router-dom";

export function Dispenser({ isDarkTheme }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full">
      {/* Fundo branco ajustado */}
      <div className={`absolute top-0 left-0 w-full h-[520px] ${isDarkTheme ? "bg-gray-800" : "bg-white"} `}></div>

      {/* Bloco do título + imagem */}
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center pt-12 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex justify-center">
            <img
              src={dispenser}
              alt="Dispenser WellPet"
              className="w-[150px] md:w-[260px] lg:w-[320px] object-contain"
            />
          </div>

          <h1 className={`text-3xl md:text-6xl lg:text-7xl font-bold ${isDarkTheme ? "text-white" : "text-gray-900" }  text-center leading-tight`}>
            Well Pet Dispenser
          </h1>
        </div>
      </div>

      {/* Degradê no final do fundo branco */}
      <div className={`absolute top-[520px] left-0 w-full h-20 ${isDarkTheme ?"bg-gradient-to-b from-gray-800 to-[#1F2123]" : "bg-gradient-to-b from-white to-[#FFE4B5]" } `} />

      {/* Sobre o Projeto + Cards */}
      <div className="relative mt-12 w-full text-center pb-16"> {/* 🔥 Espaço extra embaixo */}
        <h2 className={` ${isDarkTheme ? "text-white" : "text-black"} italic text-3xl md:text-3xl mb-8`}>Sobre o Projeto</h2>

        {/* Cards "O que é?" e "Funcionalidades" */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto shadow-md overflow-hidden rounded-lg">
          {/* Card 1 */}
          <div className="bg-orange-500 text-white p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold italic mb-3">O que é?</h3>
            <p className="text-sm leading-relaxed">
              Dispenser automático desenvolvido para fornecer ração, água e leite,
              considerando porte, idade e dieta do pet. Gerenciado por aplicativo
              e monitorado em tempo real.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-100 text-gray-900 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold italic mb-3">Funcionalidades</h3>
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              <li>Controle remoto via app ou site</li>
              <li>Configuração de horários e quantidades</li>
              <li>Sensor de nível (alerta quando estiver vazio)</li>
              <li>Dispenser de leite ajustável para filhotes</li>
              <li>Tela LCD com status do sistema</li>
            </ul>
          </div>
        </div>

        {/* Cards extras (Game, Controle, Projeto) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card Game */}
          <div
            className="bg-black rounded-lg overflow-hidden relative flex flex-col justify-end h-[360px] shadow-md cursor-pointer"
            onClick={() => setSelectedCard("game")}
          >
            <img
              src={game}
              alt="Game"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-semibold italic">Game</h3>
              <div className="h-[2px] w-16 bg-white mt-1"></div>
            </div>
          </div>

          {/* Card Controle (abre modal do app) */}
          <div
            className="bg-white rounded-lg overflow-hidden relative flex flex-col items-center h-[360px] shadow-md cursor-pointer"
            onClick={() => setSelectedCard("controle")}
          >
            <div className="absolute top-4 left-4">
              <h3 className="font-semibold italic">Controle</h3>
              <div className="h-[2px] w-20 bg-black mt-1"></div>
            </div>
            <img
              src={dispenser}
              alt="Controle"
              className="w-full h-full object-contain px-6"
            />
          </div>

          {/* Card Projeto */}
          <div
            className="bg-white rounded-lg overflow-hidden relative flex flex-col justify-end h-[360px] shadow-md cursor-pointer"
            onClick={() => setSelectedCard("projeto")}
          >
            <img
              src={projeto}
              alt="Projeto"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-4 text-black">
              <h3 className="font-semibold italic">Projeto</h3>
              <div className="h-[2px] w-20 bg-black mt-1"></div>
            </div>
          </div>
        </div>
      </div>

          {/* 🔥 Modal Card Controle */}
    {selectedCard === "controle" && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className={`${isDarkTheme ? "bg-gray-800 text-white" : "bg-[#FFE4B5]"} rounded-xl shadow-lg max-w-md w-full p-6 text-center relative`}>
          {/* Botão fechar */}
          <button
            onClick={() => setSelectedCard(null)}
            className={`absolute top-2 right-2 text-black ${isDarkTheme ? "text-white" : "text-black" }  text-lg font-bold`}
          >
            ✕
          </button>

          <img
            src={app}
            alt="App"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold italic mb-2">
            Controle Pelo App
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            Acesse o nosso App e faça a dieta do seu animalzinho de acordo com o
            peso, idade, porte e tipo (gatos, cachorros etc).
          </p>
          <button
            onClick={() => navigate("/tutorial")}
            className={` ${isDarkTheme ? "bg-black hover:bg-gray-500" : "bg-orange-500 hover:bg-orange-600 "  }  text-white font-semibold px-6 py-2 rounded-lg`}
          >
            App
          </button>
        </div>
      </div>
    )}

    {/* 🔥 Modal Card Game */}
    {selectedCard === "game" && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className={`${isDarkTheme ? "bg-gray-800 text-white" : "bg-[#FFE4B5]"} rounded-xl shadow-lg max-w-md w-full p-6 text-center relative`}>
          <button
            onClick={() => setSelectedCard(null)}
             className={`absolute top-2 right-2 text-black ${isDarkTheme ? "text-white" : "text-black" }  text-lg font-bold`}
          >
            ✕
          </button>

          <img
            src={game}
            alt="Game"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold italic mb-2">Game</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Acesse os nossos jogos interativos para aprender mais sobre o projeto e se divertir enquanto cuida do seu pet.
          </p>
          <button
            onClick={() => navigate("/game")}
            className={` ${isDarkTheme ? "bg-black hover:bg-gray-500" : "bg-orange-500 hover:bg-orange-600 "  }  text-white font-semibold px-6 py-2 rounded-lg`}
          >
            Game
          </button>
        </div>
      </div>
    )}

    {/* 🔥 Modal Card Projeto */}
    {selectedCard === "projeto" && (
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div  className={`${isDarkTheme ? "bg-gray-800 text-white" : "bg-[#FFE4B5]"} rounded-xl shadow-lg max-w-md w-full p-6 text-center relative`}>
          <button
            onClick={() => setSelectedCard(null)}
           className={`absolute top-2 right-2 text-black ${isDarkTheme ? "text-white" : "text-black" }  text-lg font-bold`}
          >
            ✕
          </button>

          <img
            src={projeto}
            alt="Projeto"
            className="w-24 h-24 object-contain mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold italic mb-2">Projeto</h3>
          <p className="text-sm mb-6 leading-relaxed">
            Veja os detalhes técnicos e estrutura do projeto WellPet, com todas as especificações e diagramas.
          </p>
          <button
            onClick={() => navigate("/projeto")}
            className={` ${isDarkTheme ? "bg-black hover:bg-gray-500" : "bg-orange-500 hover:bg-orange-600 "  }  text-white font-semibold px-6 py-2 rounded-lg`}          >
            Projeto
          </button>
        </div>
      </div>
    )}

    </section>
  );
}
