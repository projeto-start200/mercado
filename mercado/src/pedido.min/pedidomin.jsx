import React from 'react'
import styles3 from '../pedido.min/pedidomin.module.css'
import Categoria from '../categoria/categoria'



const pedidomin = () => {
  return (

    
    <>
    <header>
        <nav className={styles3['navegacao']}>
           <p>Pedido min. R$5,00</p> 
           <a href="">Perfil da loja</a>
        </nav>
    </header>
    
    <div className={styles3['cat']}>
    <Categoria/>
    </div>
    </>
  )
}

export default pedidomin