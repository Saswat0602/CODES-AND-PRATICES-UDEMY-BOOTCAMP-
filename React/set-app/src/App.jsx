import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Toggler from './Toggler'
import TogglerCounter from './ToggleCounter'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid'

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {

  return (
    <>
      {/* <Counter />
      <Toggler />
      <TogglerCounter /> */}
      <ColorBoxGrid colors={colors} />
    </>
  );
}

export default App
