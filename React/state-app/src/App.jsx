import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Dum from './Dum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    
    <Dum/>
     
    </>
  )
}

export default App
