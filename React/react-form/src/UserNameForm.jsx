import React, { useState } from "react";

const UserNameForm = () => {
  const [userName, setUserName] = useState("");

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        placeholder="username"
        id=""
        onChange={updateUserName}
      />

      <button>Submit </button>
    </div>
  );
};

export default UserNameForm;
