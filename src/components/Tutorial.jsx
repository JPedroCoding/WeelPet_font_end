import celular from '../assets/Celular.png';
import ferramenta from '../assets/Ferramenta.png';  
import gota from '../assets/Gota.png';
import mundo from '../assets/Mundo.png';
import pata from '../assets/Pata.png';
import video from '../assets/Video.png';
import dog from '../assets/Doguinho.png';
import { div } from 'framer-motion/client';
export function Tutorial( { isDarkTheme }) {
    return(
        <div className='w-full h-auto flex flex-col max-w-7xl  justify-center py-10 px-4 gap-10'>
            <section className='flex justify-start flex-col gap-2 mt-9 ml-15'>
              <h1 className='text-7xl text-texto font-bold '>Instruções </h1>
              <h2 className='text-4xl text-texto '>Como usar o Pet Dispenser
                 <br/>inteligente</h2>
                 <div className='flex justify-end -mt-15'>
                    <img src={dog} alt="" className='w-100' />
                    </div>
            </section>

         
            
               {/* Passo 1 */}
            <div className='ml-15 flex gap-2 -mt-60'  >
                <img src={celular}  className='w-27 ' alt="" />
                <h2 className='text-4xl text-texto '> Passo 1 – Conecte 
                  <br/> o dispositivo
                </h2>
                
            </div>
            <div className='ml-44 -mt-15 text-texto'> <p>Ligue o dispenser na tomada. <br />
                Certifique-se que a ESP32 esteja com o firmware carregado. <br />
                O LED da placa piscará indicando que está pronto para configurar.</p>
            </div>
                {/* Passo 2 */}

            <div className='ml-15 flex gap-2 '  >
                <img src={mundo}  className='w-27 ' alt="" />
                <h2 className='text-4xl text-texto '> Passo 2 – Conecte à internet
                  
                </h2>
                
            </div>
            <div className='ml-44 -mt-25 text-texto'> <p>Recarregue o pote de ração e água quando aparecer o aviso. <br />
                Limpe o recipiente 1x por semana. <br />
                Atualizações de sistema são automáticas via Wi-Fi.</p></div>
                {/* Passo 3 */}


        <div className='ml-15 flex gap-2 '  >
                <img src={pata}  className='w-27 ' alt="" />
                <h2 className='text-4xl text-texto '> Passo 3 – Cadastre seu pet no App
                  
                </h2>
                
            </div>
            <div className='ml-44 -mt-25 text-texto'> <p>Castre o seu pet no app <br />
                Escolha a dieta personalisada de acordo com <br />
                O peso, idade, manter ou perder peso e muito mais</p></div>
                {/* Passo 4 */}

        <div className='ml-15 flex gap-2 '  >
                <img src={gota}  className='w-27 ' alt="" />
                <h2 className='text-4xl text-texto '> Passo 4 – Controle pelo App
                  
                </h2>
                
            </div>
            <div className='ml-44 -mt-31 text-texto'> <p>Receba atualizações diárias no seu app <br />
                Como ganha, perca ou permanêcia de peso do seu pet <br />
                Além da frequencia de alimentação para um maior controle!</p></div>
                {/* Passo 5 */}

                <div className='ml-15 flex gap-2 '  >
                <img src={ferramenta}  className='w-27 ' alt="" />
                <h2 className='text-4xl text-texto '> Passo 4 – Controle pelo App
                  
                </h2>
                
            </div>
            <div className='ml-44 -mt-20 text-texto'> <p>Recarregue o pote de ração e água quando aparecer o aviso.<br />
                Limpe o recipiente 1x por semana <br />
                Atualizações de sistema são automáticas via Wi-Fi.</p></div>

                {/* Vídeo Tutorial */}

            <section className='flex justify-start flex-col  mt-9  ml-15'>
              <h2 className='text-5xl text-texto font-bold'>Vídeo Demostrativo
               </h2>
                 <div className='flex justify-end -mt-15'>
                    <img src={video} alt="" className='w-100 mb-20 hover:w-130 cursor-pointer' />
                    </div>
            </section>
                
        
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

    )
}