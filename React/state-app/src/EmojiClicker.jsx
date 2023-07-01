import React, { useState } from "react";

const EmojiClicker = () => {
  const [emojis, sertEmojis] = useState(["⭐"]);
  const addEmoji = () => {
    sertEmojis((oldEmojis)=>[...oldEmojis,"😍"]);
  };

  return (
    <div>
      {emojis.map((e) => (
        <span>{e}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default EmojiClicker;
