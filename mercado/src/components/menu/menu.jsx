import React from 'react'
import styles from '../menu/menu.module.css'
import Pesquisa from '../pesquisa/pesquisa'

const menu = () => {
  return (
    <>
    <header>
        <div className={styles['fundo']}>   
            <div className={styles['tudo']} >
                <div className={styles['logo']}>Mercado</div>
                    <div className={styles['nav']}>
                    <nav className={styles['navegacao']} >
                        <a href="/">inicio</a>
                        <a href="">Seja parceiro</a>
                    </nav>

                    <nav className={styles['cadastre']}>
                        <a href="">Cadastre-se</a>
                       
                    </nav>

                    <div className={styles['butao']}>
                    <button >entrar</button>
                    </div>

                </div>
                
            </div>

        </div>
    </header>

    <Pesquisa/>
    </>
  )
}

export default menu