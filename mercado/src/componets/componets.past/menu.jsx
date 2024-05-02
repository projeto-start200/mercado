import React from 'react'
import Icon from "./img/logo.jpg"
import fd from "./img/foto.jpg"

const menu = () => {
  return (
    
    <header >
    
       
  
    
      <div className='tudo'>
      <img src={Icon} alt="" />
      <div className='menu'>
        <nav>
            <a href="">inicio</a>
            <a href="">sobre</a>
            <a href="">contato</a>
            <a href="">criar conta</a>
            
        </nav>
         
      </div>
      <div className='but'>
          <button>Entrar</button>
          </div>
    </div>
      
    
</header>


  )
}

export default menu