import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Dum from './Dum'
import ScoreKeeper from './ScoreKeeper'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Dum /> */}
      <ScoreKeeper />
    </>
  );
}

export default App
