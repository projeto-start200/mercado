import React from 'react'
import styles from '../categoria/categoria.module.css'

const categoria = () => {
  return (
    <div className={styles['linha']}>
        <div className={styles['navegacao']}>
            <nav>
                <a href="/">Limpeza</a>
                <a href="">Frigorifico</a>
                <a href="">Padaria</a>
                <a href="">Bebidas</a>
                <a href="">Higiene</a>
                <a href="">Grãos</a>
                <a href="">Bomboniere</a>
                <a href="">Bebidas</a>
            </nav>


        </div>

    </div>
  )
}

export default categoria