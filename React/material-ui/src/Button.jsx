import React from 'react'

const Button = () => {
  return (
    <div>
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
    </div>
  );
}

export default Button
