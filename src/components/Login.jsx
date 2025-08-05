import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gatinhaImg from "../assets/Gatinha.png";
import ossoButton from "../assets/bt.png";
import ossoBlack from "../assets/Entrar-black.png"

export function Login({ isDarkTheme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    navigate("/");
  };

  return (
    <div className={`min-h-screen relative flex items-center justify-center px-4 py-20 max-sm:block`}>
      {/* Contêiner principal */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between max-sm:flex-col max-sm:items-center max-sm:justify-center">
        {/* Formulário */}
        <div className="w-full sm:w-1/2 flex justify-center items-center max-sm:mb-10">
          <div className={ ` ${isDarkTheme ? "bg-headerblack" : "bg-header"}  bg-header rounded-3xl shadow-2xl p-6 sm:p-8 sm:-mt-30 text-white w-full  max-w-md max-sm:w-[90%]`}>
            {/* <img src={patinha} alt="" className="w-10 absolute" /> */}
            <h2 className={`${isDarkTheme ? "text-white" : "text-black"} text-3xl py-10  font-bold text-center mb-6`}>Login</h2>
            {/* <img src={patinha} alt="" className="w-10 absolute top-70 left-18" />
            <img src={patinha} alt="" className="w-10 absolute top-2 left-80" />
            <img src={patinha} alt="" className="w-10 absolute top-3 left-30" />
            <img src={patinha} alt="" className="w-10 absolute top-70 left-80" /> */}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full z-10 px-4 py-3 font-bold ${isDarkTheme ?  "border-gray-300 text-gray-300 bg-headerblack":   "  bg-header   border-black"} border-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full z-10 px-4 py-3 font-bold ${isDarkTheme ?  "border-gray-300 text-gray-300 bg-headerblack":   "  bg-header   border-black"} border-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white`}
                  placeholder="Senha"
                  required
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-32 h-16 bg-transparent border-none focus:outline-none"
                >
                  {ossoButton ? (
                    <img
                      src={ isDarkTheme ? ossoBlack :ossoButton}
                      alt="Entrar"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="w-full h-full flex items-center justify-center bg-orange-600 text-white font-bold rounded-lg">
                      Entrar
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Imagem da gatinha */}
        <div className="w-full sm:w-1/2 flex justify-end max-sm:relative max-sm:justify-center">
          <img
            src={gatinhaImg}
            alt="Gatinha"
            className="w-64 h-auto object-contain ml-8 max-sm:ml-[-30px] max-sm:mt-[-20px] max-sm:w-40 max-sm:absolute max-sm:top-full  max-sm:translate-y-[-60%] max-sm:translate-x-[90%]"
          />
        </div>
      </div>

      {/* Barra Laranja Inferior */}
      <footer className={`fixed bottom-0 left-0 right-0 ${isDarkTheme ? "bg-headerblack" : "bg-header"} text-white z-40 px-6 py-4 shadow-md`}>
        <div className="mx-auto max-w-7xl flex justify-center items-center">
          <p className="text-sm sm:text-base">© 2025 WellPet - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
