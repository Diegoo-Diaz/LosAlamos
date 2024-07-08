import { useState } from 'react'
import { Button } from './componentes/Button'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="hola" />
      


      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </>
  )
}

export default App
