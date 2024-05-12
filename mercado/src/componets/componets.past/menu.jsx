import React from 'react'
import styles from '../componets.past/menu.module.css'
import Pedidomin from '../../pedido.min/pedidomin'


const Menu = () => {
  return (
    <>
  <header >
    <div className={styles['fix']}>
    <div className={styles['fundo']}> 
   <div className={styles['tudo']}>
      <div className={styles['logo']}><h1>Mercado</h1></div>
      <div className={styles['nave']}>
         <nav>
          <a href="/">Home</a>
          <a href="">Sobre</a>
          <a href="">Cadastre-se</a>
         </nav>
      </div>
      
      
       
    </div>
    </div>
    </div>
  </header>


<div>
  <Pedidomin/>
  </div>
  </>

  )
}

export default Menu