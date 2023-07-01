import React, { useState } from "react";
import {v4 as uuid} from "uuid"

function randomEmoji() {
  const choices = ["😬", "😘", "😭", "🙄", "🤪", "🤢","😒","🤦‍♂️","😎"];
  return choices[Math.floor(Math.random() * choices.length)];
}



const EmojiClicker = () => {
  const [emojis, sertEmojis] = useState([{ id:uuid(),emoji:"⭐"}]);
  const addEmoji = () => {
    sertEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji()  }]);
  };
const deleteEmoji = (id) => {
  sertEmojis((emg) => {
    return emg.filter((e) => e.id !== id);
  });
};

  return (
    <div>
      {emojis.map((e) => (
        <span onClick={() => deleteEmoji(e.id)} key={e.id}>
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
};

export default EmojiClicker;
