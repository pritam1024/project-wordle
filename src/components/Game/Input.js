import React, { useState } from "react";

export const Input = ({submitGuess}) => {
  const [word, setWord] = useState("");
  const handleGuess=(event)=>{
    event.preventDefault();

    console.log("Submitted word:", word);
    submitGuess(word); // Call the submitGuess function with the current word
    setWord(""); // Clear the input field after submission
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
};
