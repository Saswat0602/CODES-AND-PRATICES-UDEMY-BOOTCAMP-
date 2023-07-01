import React, { useState } from "react";
import {v4 as uuid} from "uuid"

const EmojiClicker = () => {
  const [emojis, sertEmojis] = useState([{ id:uuid(),emoji:"⭐"}]);
  const addEmoji = () => {
    sertEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😁" }]);
  };

  return (
    <div>
      {emojis.map((e) => (
        <span key={e.id} >{e.emoji}</span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default EmojiClicker;
