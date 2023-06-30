import React from 'react'

function formSubmit(e){
    e.preventDefault()
    console.log("form submitted");
}

const Form = () => {
  return (
    <div>
    <form onSubmit={formSubmit}>
        <button>Submit</button>
    </form>
      
    </div>
  )
}

export default Form
