import dog from "../assets/Doguinho.png";
import rabo from "../assets/Rabo.png";
import pata from "../assets/patas_claras_1.png";

export function Body({ isDarkTheme }) {
  return (
    <div className={` max-sm:bottom-20  sm:p-4 sm:flex sm:bottom-8 sm:items-center  flex flex-col sm:flex-row px-8 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-between min-h-screen sm:px-8 md:px-16 xl:px-20 2xl:px-24 relative z-10 max-w-[2500px] 
      
    `}>
      {/* COLUNA DO TEXTO */}
      <div className="max-w-2xl my-40 sm:my-0 text-left mb-8 md:mb-0">
        <h1 className={`text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold ${isDarkTheme ? "text-white" : "text-texto"}`}>
          WellPet o seu <br />
          Dispenser Inteligente
        </h1>
        <p className={`py-5 text-sm lg:text-base xl:text-xl ${isDarkTheme ? "text-gray-200" : "text-gray-800"}`}>
          Um alimentador perfeito para seu pet! <br />
          Garantindo alimento e água mesmo <br />
          quando você não está em casa.
        </p>
        <button className={`sm:text-sm max-sm:text-xs text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-bold bg-laranja p-3 md:p-4 px-6 md:px-8 rounded-3xl`}>
          Comece Agora
        </button>
      </div>

      {/* COLUNA DA IMAGEM */}
      <img
        src={dog}
        alt="Imagem pet"
        className=" max-sm:mt-[-100px] max-sm:ml-[120px] max-sm:pl max-sm:w-[200px] sm:-top-10 w-[300px] sm:w-[300px] md:w-[400px] xl:w-[500px] 2xl:w-[600px] sm:top-none fixed sm:relative  top-110 "
      />

      {/* Barra Laranja Inferior */}
      <footer className={`fixed bottom-0 left-0 right-0 ${isDarkTheme ? "bg-headerblack" : "bg-header"} text-white z-40 px-6 py-4 shadow-md`}>
        <div className="mx-auto max-w-7xl flex justify-center items-center">
          <p className="text-sm sm:text-base">© 2025 WellPet - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
  