import React, { useState } from "react";

const UserNameForm = () => {
  const [userName, setUserName] = useState("");

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="userName">enter ur username</label>
      <input
        type="text"
        value={userName}
        placeholder="username"
        id="userName"
        onChange={updateUserName}
      />

      <button>Submit </button>
    </div>
  );
};

export default UserNameForm;
