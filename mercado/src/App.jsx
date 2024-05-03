import { useState } from 'react'
import Home from './paginas/home'
import Sobre from './paginas/sobre'
import Objetivos from './paginas/objetivos'



function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Objetivos/>
  </div>
  
  )
}

export default App
