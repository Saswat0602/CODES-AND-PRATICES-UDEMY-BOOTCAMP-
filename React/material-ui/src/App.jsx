import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import Form from "./Form";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <RatingDemo /> */}
      <Navbar />
      <Form />
    </>
  );
}

export default App;
