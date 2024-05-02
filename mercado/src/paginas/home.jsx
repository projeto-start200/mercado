import React from 'react'
import Menu from '../componets/componets.past/menu'
import Fg from '../componets/componets.past/img/fundodesk.png'

const home = () => {
  return (
    <div>

 <Menu/>
   <div className='logo1'>
    <p> Unidos em Generosidade: </p>
    <p> Mesa solidaria,</p>
    <p>alimentando corações e</p>
    <p>nutrindo esperanças!</p>
   </div>

    <div className='inscreva'>
      <button>inscreva-se</button>
    </div>
    
   
    <div className='ft'>
      <img className='logoo' src={Fg} alt="" />
    </div>
 </div>
  

  )
}

export default home