import React from 'react'
import Menu from '../componets/componets.past/menu'
import styles3 from '../pags.style/sobre.module.css'
import pessoa from '../componets//componets.past/img/pessoa.jpg'

const sobre = () => {
  return (
     
    <header>
      <Menu/>
      <div className={styles3['tudo']}>
        <h1>
        Somos uma equipe dedicada que se uniu para <br /> combater a fome e promover a segurança alimentar. <br /> Conectamos doadores de alimentos a pessoas em situação de vulnerabilidade <br /> por meio de uma rede de distribuição eficiente e sustentável. <br /> Nosso objetivo é garantir que ninguém passe fome e que todos <br /> tenham acesso a alimentos nutritivos.
        </h1>
       
      </div>
      <div className={styles3['loc']}>
          <img className={styles3['foto']} src={pessoa} alt="" />
        </div>
    </header>
  )    
    
}

export default sobre