import { useState } from 'react'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline";
import Todo from "./Todo";
import Navbar from './Navbar';

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Todo />
    </>
  );
}

export default App
