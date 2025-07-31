import { useNavigate } from "react-router-dom";
import cavalo from "../assets/Cavalo.png";
import { BookText, Image, FileText } from "lucide-react"; // Apenas ícones ilustrativos (opcional)

export function Referencias({ isDarkTheme }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-4 py-16 flex flex-col items-center justify-center relative z-10 ">
      <h2 className={`sm:mt-[-150px] text-4xl md:text-5xl font-bold ${isDarkTheme ?"text-white" : "text-orange-400"} mb-12 text-center`}>
        Referências
      </h2>

      {/* Conteúdo principal */}
      <div className="flex flex-col  lg:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Caixa de conteúdo */}
        <div
          className={`relative border border-black rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-3xl ${
            isDarkTheme ? "bg-[#2c2c2c] text-white border-white" : "bg-amber-100"
          }`}
        >
          <div className={`space-y-6 text-sm sm:text-base ${ isDarkTheme ? "text-gray-300" :  "text-black"} `}>
            <div>
              <div className="flex items-center gap-2 font-bold">
                <BookText className="w-5 h-5" />
                Documentações
              </div>
              <p className="ml-6">
                Firebase Docs – https://firebase.google.com/docs <br />
                ESP32 Arduino – https://docs.espressif.com/projects/arduino-esp32
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-bold">
                <Image className="w-5 h-5" />
                Imagens
              </div>
              <p className="ml-6">
                Freepik – https://www.freepik.com <br />
                Flaticon – https://www.flaticon.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-bold">
                <FileText className="w-5 h-5" />
                Artigos
              </div>
              <p className="ml-6">
                Freepik – https://www.freepik.com <br />
                Flaticon – https://www.flaticon.com
              </p>
            </div>
          </div>

          {/* Cavalo no mobile (dentro da caixa) */}
          <div className="mt-6  lg:hidden flex justify-center">
            <img src={cavalo} alt="Cavalo" className="w-28 sm:w-36 h-auto" />
          </div>
        </div>

        {/* Cavalo no desktop (fora da caixa) */}
        <div className="mt-6 hidden lg:block">
          <img src={cavalo} alt="Cavalo" className="w-36 sm:w-52 h-auto" />
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
