import { useState } from 'react'
import meenu from './components/menu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
                           //----menu----//
  return (
    <div>
      
    <header>
           <div className='fundo'>
             <div className='logo'><h1><strong>Mercado</strong></h1></div>
             <div className='menu'>
               <nav>
                 <a href="#"><strong>inicio</strong></a>
                 <a href="#"><strong>seja parceiro</strong></a>
                 <a href="#"><strong>contato</strong></a>
               </nav>
       
             </div>
       
             <div className='but'>
             <a href="#" className='criar'><strong>criar conta</strong></a>
              <button>Entrar</button>
              </div>
       
       
           </div>
          </header>
 
            










            <div className='pesquisa'>
              <input type="text" placeholder='pesquisa' />
              <button>pesquisar</button>
            </div>

         









          <div className='cat'>   
            <div className='fundo2'>
              <div className='name'> <h1>categoria</h1></div>
              <div className='categoria'>
              <nav>
                <a href="#">Bebidas</a>
                <a href="#">congelados</a>
                <a href="#">limpeza</a>
                <a href="#">Açougue</a>
                <a className='oferta' href="#">ofertas</a>
              </nav>
                

              </div>

            

            </div>

          </div>
















          <div className='compra'>
            <div className='fundo3'>
             <img src="macarrao.png" alt="" />
              <div className='titulo'>
                <h2> macarrao 68g</h2>
              </div>

              <div className='val'><h4>validade 03/5/24</h4></div>

              <div className='boot'> <button>adicionar</button></div>
              


            </div>

          </div>









    </div>
  )
}
  
export default App
