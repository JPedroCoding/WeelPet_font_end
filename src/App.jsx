import { Header } from "./components/Header";
import {PatasDecorativas} from "./components/PatasDecorativas";
import {Body}  from"./components/Body";
import { useState, useEffect } from "react";
import {PatasDecorativasBlack} from "./components/PatasDecorativasBlack";


export function App() {

const [isDarkTheme, setIsDarkTheme] = useState(false);  

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`min-h-screen ${isDarkTheme ? "bg-blackfundo" : "bg-fundo"} relative`}>
      < Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      
      {isDarkTheme ? (<PatasDecorativasBlack quantidade={17}/> ) : (<PatasDecorativas  quantidade={15} />) }
      
      <Body isDarkTheme={isDarkTheme} />

      
      
    </div>
  );
}