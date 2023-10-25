import React from "react";

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  const roundedMinutes =
    minutes < 30 ? Math.round(minutes / 5) * 5 : Math.round(minutes / 10) * 10;
  const numberOfEmojis =
    roundedMinutes < 30 ? roundedMinutes / 5 : roundedMinutes / 10;

  const Emojis = () => {
    const emojiArr = [];

    if (roundedMinutes < 30) {
      for (let i = 0; i < numberOfEmojis; i++) {
        emojiArr.push("☕️");
      }
    } else if (roundedMinutes > 30) {
      for (let i = 0; i < numberOfEmojis; i++) {
        emojiArr.push("🍱");
      }
    }

    return <>{emojiArr.map((emoji) => emoji)}</>;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • <Emojis/> {minutes} minutes
        read
      </small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
