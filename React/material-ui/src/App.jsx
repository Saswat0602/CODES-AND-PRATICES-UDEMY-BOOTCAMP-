import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

import AlarmIcon from "@mui/icons-material/Alarm";

function App() {
  return (
    <>
      <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button color="error" variant="outlined">
          Outlined
        </Button>
      </div>
      <div>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
      </div>
    </>
  );
}

export default App;
