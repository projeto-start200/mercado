import React from 'react'
import styles2 from '../categoria/categoria.module.css'
import Produtos from '../produtos/produtos'

const categoria = () => {
  return (
    <>
   
      <header>  
        <div className={styles2['linha']}>
          <div className={styles2['tudo']} >
              <div className={styles2['navegacao']}>
                  <nav>
                      <a href="/">BATATA-FRITA</a>
                      <a href="">CAUDINHO-FEIJAO</a>
                      <a href="">CAUDIMHO-CAMARÃO</a>
                      <a href="">CAUDINHO-MARISCO</a>
                      <a href="">CABEÇA DE GALO</a>

                      
                  </nav>
              </div>
          </div>
        </div>  
  </header>

  <Produtos/>
 
      </>
  )
}

export default categoria