import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import Dum from './Dum'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import Scorekeeper2 from './Scorekeeper2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <Dum /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <Scorekeeper2 numPlayers={5} target={5} />
    </>
  );
}

export default App
