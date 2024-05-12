import React from 'react'
import styles4 from '../produtos/produto.module.css'
import incon from '../img/caldinho.jpg'

const produtos = () => {
  return (
    <>
    <form>
      <div className={styles4['card']}>
        <div className={styles4['fundo']}>
            <div className={styles4['tudoo']}>
                    <div className={styles4['imagen']}><img  src={incon} alt="" /></div>
                        <p className={styles4['titulo']}>Macarrão</p>
                        <p className={styles4['subtitulo']}>Vitarella Espaguete  pacote com 50g</p>
                        <p className={styles4['preco']}>R$7.99</p>
                    </div>
                          <div className={styles4['but']}>
                             <button  > Adicionar</button>
                          </div>
             </div>
          </div>

    </form>
    


    <form>
      <div className={styles4['card1']}>
        <div className={styles4['fundo1']}>
            <div className={styles4['tudoo1']}>
                    <div className={styles4['imagen1']}><img src={incon} alt="" /></div>
                        <p className={styles4['titulo1']}>Macarrão</p>
                        <p className={styles4['subtitulo1']}>Vitarella Espaguete  pacote com 50g</p>
                        <p className={styles4['preco1']}>R$7.99</p>
                    </div>
                          <div className={styles4['but']}>
                             <button className={styles4['bot']} > Adicionar</button>
                          </div>
             </div>
          </div>

    </form>
  
    </>


  )
}

export default produtos