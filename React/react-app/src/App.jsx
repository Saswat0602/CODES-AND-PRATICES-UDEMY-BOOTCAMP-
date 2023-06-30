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
import ShopingList from './ShopingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Clicker2 from './Clicker2'



const properties=[
  {id :1, name:'mountain cave' ,rating:4.6,price:58},
  {id :2, name:'premiium  suite' ,rating:4.6,price:93},
  {id :3, name:'royal villa ' ,rating:4.3,price:38},
  {id :4, name:'maple hollow' ,rating:4.6,price:83},
  {id :5, name:'star residency ' ,rating:3.6,price:47},
  {id :6, name:'my  plot' ,rating:3.9,price:18},
]



function App() {

  const data =[
    { id:1, item:"eggs",quantity: 12, completed:false}, 
    { id:2 ,item:"chicken",quantity: 2, completed:true}, 
    { id:3 ,item:"milk" ,quantity:1 , completed:false}, 
    { id:4, item:"rice" ,quantity: 2, completed:true}, 
    { id:5, item:"appple" ,quantity: 10, completed:false}, 
  ]

 
  return (
    <>
      {/* <Greeet person = "sam" from="ME"/>
    <Greeet person = "vik" from="ME"/>
    <Greeet person = "Nik" from="ME"/>
    <Chicken/>
      
      <Die numSides ={10} />
      <Die/>
      <Die numSides ={50} />
      <ListPicker values = {[1,2,3,4,5,6]}/>
      <ListPicker values = {['a','b']}/>

    <Heading color='pink' text={"hello"} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors ={['red','magenta','teal','blue']} /> 
      
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/>
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/>
      <Slots val1={"😎"} val2={"s"} val3={"😎"}/> */}

      {/* //shoping list  */}
      {/* <ShopingList items={data}/> */}
      {/* <PropertyList properties={properties}/> */}

      <Form />
      <Clicker />

      <Clicker2 message="HI!!!!" buttonText="Please Click Me" />
      <Clicker2 message="Please Stop Clicking Me!" buttonText="do not click" />
    </>
  );
}

export default App
