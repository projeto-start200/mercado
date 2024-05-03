import React from 'react'
import Menu from '../componets/componets.past/menu'
import Fg from '../componets/componets.past/img/fundodesk.png'
import styleH from '../pags.style/home.module.css'

const home = () => {
  return (
    <div>

 <Menu/>
   <div className={styleH['logo1']}>
    <p> Unidos em Generosidade: </p>
    <p> Mesa solidaria,</p>
    <p>alimentando corações e</p>
    <p>nutrindo esperanças!</p>
   </div>

    <div className={styleH['inscreva']}>
      <button>inscreva-se</button>
    </div>
    
   
    <div className={styleH['ft']}>
      <img className={styleH['logoo']} src={Fg} alt="" />
    </div>
 </div>
  

  )
}

export default home