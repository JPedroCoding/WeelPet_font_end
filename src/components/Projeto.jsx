import { useState } from "react";
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import esp from "../assets/ESP.png";
import bomba from "../assets/Bomba.png";
import servo from "../assets/ServoMotor.png";
import sensorPeso from "../assets/10kg.png";  
import sensor from "../assets/50kg.png";  
import fonte from "../assets/Fonte.png";
import hx from "../assets/hx.png";
import Jumpers from "../assets/Jumpers.png";
import LCD from "../assets/LCD.png";    
import Proto from "../assets/Proto.png";
import rele from "../assets/rele.png";
import RFID from "../assets/RFID.png";
import ultrassonico from "../assets/Sensor.png";  

export function Projeto({ isDarkTheme }) {
  const allItems = [
    { name: "Sensor Ultrassônico", img: ultrassonico, link: "", price: 25.99 },
    { name: "Bomba D’água", img: bomba, link: "", price: 45.50 },
    { name: "ESP32", img: esp, link: "", price: 15.75 },
    { name: "Servo Motor", img: servo, link: "", price: 12.30 },
    { name: "Sensor de Peso", img: sensorPeso, link: "", price: 18.90 },
    { name: "Sensor de Peso 50kg", img: sensor, link: "", price: 22.00 },
    { name: "Fonte", img: fonte, link: "", price: 35.00 },
    { name: "HX711", img: hx, link: "", price: 10.50 },
    { name: "Jumpers", img: Jumpers, link: "", price: 5.25 },
    { name: "LCD", img: LCD, link: "", price: 20.75 },
    { name: "Protoboard", img: Proto, link: "", price: 8.99 },
    { name: "Rele", img: rele, link: "", price: 7.80 },
    { name: "RFID", img: RFID, link: "", price: 30.00 },
  ];

  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para o popup

  const items = allItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    if (items.length === 0) return [];
    const prev = (index - 1 + items.length) % items.length;
    const next = (index + 1) % items.length;
    return [
      { ...items[prev], pos: "prev" },
      { ...items[index], pos: "active" },
      { ...items[next], pos: "next" },
    ];
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className={`flex flex-col -mt-11 items-center ${isDarkTheme ? "text-white" : "text-gray-600"} justify-center min-h-screen gap-6 p-6 relative md:gap-4 md:p-4`}>
      {/* 🔎 Barra de pesquisa */}
      <div className="relative w-full max-w-md md:max-w-xl mt-0 mb-8 md:mt-8">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDarkTheme ? "text-white" : "text-gray-600"}`} />
        <input
          type="text"
          placeholder="O que você procura?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 
            ${isDarkTheme ? "bg-gray-900 text-white placeholder-white border-gray-600" : "bg-white text-black placeholder-gray-500"}`}
        />
      </div>

      {/* 🎠 Carrossel */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Botão para cima (mobile) */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-1/2 -translate-x-1/2 top-[-40px] z-10 w-10 h-10 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronUp className="text-white w-6 h-6 mx-auto" />
        </button>

        {/* Itens visíveis */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-500 ease-in-out overflow-hidden">
          {getVisibleItems().map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedItem(item); // Abre o popup ao clicar em qualquer peça visível
              }}
              className={`cursor-pointer text-center transition-all duration-500 ${item.pos !== "active" ? "hidden md:block" : ""} ${
                item.pos === "active"
                  ? "scale-110 opacity-100"
                  : "scale-90 opacity-60"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Botão para baixo (mobile) */}
        <button
          onClick={nextSlide}
          className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[-40px] z-10 w-10 h-10 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronDown className="text-white w-6 h-6 mx-auto" />
        </button>

        {/* Botões para desktop (esquerda e direita) */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-3 bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* 🔘 Indicadores */}
      <div className="flex gap-2 mt-8 md:mt-4">
        {items.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Barra Laranja Inferior */}
      <footer className={`fixed bottom-0 left-0 right-0 ${isDarkTheme ? "bg-headerblack" : "bg-header"} text-white z-40 px-6 py-4 shadow-md`}>
        <div className="mx-auto max-w-7xl flex justify-center items-center">
          <p className="text-sm sm:text-base">© 2025 WellPet - Todos os direitos reservados</p>
        </div>
      </footer>

      {/* 🔥 Modal Card Projeto */}
      {selectedItem && (
        <div className="fixed inset-0 flex justify-center items-center z-50" onClick={closePopup}>
          <div className={`${isDarkTheme ? "bg-gray-800 text-white" : "bg-[#FFE4B5]"} rounded-xl shadow-lg max-w-md w-full p-6 text-center relative md:max-w-sm md:p-5 sm:max-w-xs sm:p-4`} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closePopup}
              className={`absolute top-7 right-2 text-black ${isDarkTheme ? "text-white" : "text-black"} text-2xl font-bold`}
            >
              ✕
            </button>
            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-24 h-24 object-contain mx-auto mb-4 md:w-20 md:h-20 sm:w-20 sm:h-20"
            />
            <h3 className="text-xl font-semibold italic mb-2 md:text-lg sm:text-lg">{selectedItem.name}</h3>
            <p className="text-sm mb-6 leading-relaxed md:text-xs sm:text-xs">
              Veja os detalhes técnicos e estrutura do projeto WellPet, com todas as especificações e diagramas.
            </p>
            <p className="text-lg font-semibold mb-4 md:text-base sm:text-base">Preço: R${selectedItem.price.toFixed(2)}</p>
            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkTheme ? "bg-black hover:bg-gray-500" : "bg-orange-500 hover:bg-orange-600"} text-white font-semibold px-6 py-2 rounded-lg mr-2 md:px-4 md:text-sm sm:px-4 sm:text-sm`}
              >
                Ver Produto
              </a>
            )}
            <button
              className={`${isDarkTheme ? "bg-black hover:bg-gray-500" : "bg-orange-500 hover:bg-orange-600"} text-white font-semibold px-6 py-2 rounded-lg md:px-4 md:text-sm sm:px-4 sm:text-sm`}
            >
              Adquirir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}