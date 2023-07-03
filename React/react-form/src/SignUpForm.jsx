import React, { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  
 const  handleSubmit = ()=>{
    console.log(firstName ,lastName);
 }
  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        value={firstName}
        placeholder="firstname"
        id="firstname"
        onChange={updateFirstName}
      />
      <button>Submit </button>

      <label htmlFor="lastname">First Name</label>
      <input
        type="text"
        value={lastName}
        placeholder="lastname"
        id="lastname"
        onChange={updateLastName}
      />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
};

export default SignUpForm;
