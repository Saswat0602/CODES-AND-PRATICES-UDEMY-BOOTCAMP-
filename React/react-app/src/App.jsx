import { useState } from 'react'
import './App.css'
import Chicken from './Chicken'
import Greeet from './Greeet'
// import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {


  return (
    <>
      {/* <Greeet person = "sam" from="ME"/>
    <Greeet person = "vik" from="ME"/>
    <Greeet person = "Nik" from="ME"/>
    <Chicken/> */}
      {/* 
      <Die numSides ={10} />
      <Die/>
      <Die numSides ={50} />
      <ListPicker values = {[1,2,3,4,5,6]}/>
      <ListPicker values = {['a','b']}/> */}



      {/* <Heading color='pink' text={"hello"} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors ={['red','magenta','teal','blue']} /> */}
      
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/>
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/>
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/>




    </>
  );
}

export default App
