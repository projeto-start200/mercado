import React from 'react'
import Icon from "./img/logo2024.jpg"
import fd from "./img/foto.jpg"
import styles from './styless/home.module.css'

const menu = () => {
  return (
    
   
    <header  >
    
    
       
  
      <div className={styles['fundo']}>
      <div className={styles['tudo']}>
      <img src={Icon} alt="" />
      <div className={styles['menu']}>
        <nav>
            <a href="">Home</a>
            <a href="">Quem somos</a>
            <a href="">contato</a>
            <a href="">inscreva-se</a>
            
        </nav>
         
      </div>
      <div className={styles['but']}>
          <button>Entrar</button>
          </div>
    </div>
      
      <div className={styles['linha']}></div>
      </div>
</header>


  )
}

export default menu