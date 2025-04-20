
import dog from "../assets/Doguinho.png"
import rabo from "../assets/Rabo.png"

export function Body() {
    return (
      <div className="flex flex-col sm:flex-row   px-8 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  items-center justify-between min-h-screen sm:px-8  md:px-16 xl:px-20 2xl:px-22 relative z-10 max-w-[2500px] ">
        {/* COLUNA DO TEXTO */}
        <div className="max-w-2xl my-40 sm:my-0   text-left mb-8  md:mb-0">
          <h1 className="  text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl  font-bold text-texto">
            Dispenser de <br />
            Pets Inteligente
          </h1>
          <p className="py-5  text-sm lg:text-base xl:text-xl   text-gray-800">
            Um alimentador perfeito para seu pet! <br />
            Garantindo alimento e água mesmo <br />
            quando você não está em casa.
          </p>
          <button className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-bold bg-laranja p-3 md:p-4 px-6 md:px-8 rounded-3xl ">
            Comece Agora
          </button>
        </div>
            
        {/* COLUNA DA IMAGEM */}
        <img src={dog} alt="Imagem pet" className="w-[300px] sm:w-[400px] xl:w-[500px] 2xl:w-[600px] sm:top-none  fixed  sm:relative sm:top-0 top-110 " />

        
      </div>
    );
  }
  