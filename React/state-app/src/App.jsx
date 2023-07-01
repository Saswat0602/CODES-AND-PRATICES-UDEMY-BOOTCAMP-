import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Dum from './Dum'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Dum /> */}
      {/* <ScoreKeeper /> */}
      <EmojiClicker />
    </>
  );
}

export default App
