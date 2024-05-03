import React from 'react'
import Menu from '../componets/componets.past/menu'
import styles4 from '../pags.style/objetivos.module.css'

const objetivos = () => {
  return (
    <header>
        
        <Menu/>
    <div className={styles4['fundo']}>
        <div className={styles4['texto']}>
            <h3>usuario</h3>
        </div>

        </div>
          
       
       

        <div className={styles4['fundo2']}>
            <div className={styles4['texto2']}> 
                <h3>Empresa</h3>
        
        </div>
        
        </div>

      </header>
        
      
  )
}

export default objetivos