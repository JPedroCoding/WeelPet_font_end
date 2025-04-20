import { Header } from "./components/Header";
import {PatasDecorativas} from "./components/PatasDecorativas";
import {Body}  from"./components/Body";



export function App() {
  return (
    <div className="min-h-screen bg-fundo relative ">
      < Header/>
      <PatasDecorativas quantidade={7} />
      <Body/>

      

    </div>
  );
}