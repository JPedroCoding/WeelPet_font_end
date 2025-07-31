import { useNavigate } from "react-router-dom";
import cavalo from "../assets/Cavalo.png";

// Array com dados de cada pessoa
const pessoas = [
  { nome: "Pessoa 1", username: "@pessoa1", img: "" },
  { nome: "Pessoa 2", username: "@pessoa2", img: "" },
  { nome: "Pessoa 3", username: "@pessoa3", img: "" },
  { nome: "Pessoa 4", username: "@pessoa4", img: "" },
];

export function Sobre({ isDarkTheme }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-12 pb-32 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Título */}
        <h2 className="text-5xl font-bold text-orange-400 mb-12 text-center">
          Sobre nós
        </h2>

        {/* Container principal */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
          {/* Caixa com cards e cavalo (mobile) */}
          <div
            className={`w-full max-w-6xl border border-black rounded-xl p-8 shadow-lg flex flex-col items-center ${
              isDarkTheme ? "bg-[#2c2c2c]" : "bg-white"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center w-full">
              {pessoas.map((pessoa, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center ${
                    isDarkTheme ? "bg-[#444]" : "bg-gray-100"
                  } p-4 rounded-lg shadow-md w-32 sm:w-36`}
                >
                  {/* Substitua aqui quando tiver as imagens */}
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2" />
                  <span className="text-sm font-semibold">{pessoa.nome}</span>
                  <span className="text-sm text-gray-500">{pessoa.username}</span>
                </div>
              ))}
            </div>

            {/* Cavalo no mobile (visível apenas em telas pequenas) */}
            <div className="mt-6 block lg:hidden">
              <img src={cavalo} alt="Cavalo" className="w-28 sm:w-36 h-auto" />
            </div>
          </div>

          {/* Cavalo no desktop (fora da div) */}
          <div className="mt-6 lg:mt-0 hidden lg:block">
            <img src={cavalo} alt="Cavalo" className="w-36 sm:w-52 h-auto" />
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer
        className={`fixed bottom-0 left-0 right-0 ${
          isDarkTheme ? "bg-headerblack" : "bg-header"
        } text-white z-40 px-6 py-4 shadow-md`}
      >
        <div className="mx-auto max-w-7xl flex justify-center items-center">
          <p className="text-sm sm:text-base">
            © 2025 WellPet - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
