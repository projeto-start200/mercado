import React from 'react'
import styles1 from '../pesquisa/pesquisa.module.css'
import Categoria from '../categoria/categoria'

const pesquisa = () => {
  return (
    <>
   <header>

      <div className={styles1['pes']}>
        <input type="text" placeholder='PESQUISE' />

      </div>

   </header>
    <Categoria/>

   </>
  )
}

export default pesquisa