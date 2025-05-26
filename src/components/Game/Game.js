import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { Input } from "./Input";
import { DisplayGuesses } from "./DisplayGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { Banner } from "./Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
function Game() {
  const [guesses, setGuesses] = useState([]);
  const [emptyGuesses, setEmptyGuesses] = useState(
    range(NUM_OF_GUESSES_ALLOWED)
  );
  const [status, setStaus] = useState("");
  console.log(emptyGuesses);
  const submitGuess = (word) => {
    // Add the submitted word to the guesses array
    if (guesses.length >= 6 || status==="happy") {
      return;
    }
    const checkedWord = checkGuess(word, answer);
    const success = checkedWord.every(({ status }) => status === "correct");
    if (success) {
      setStaus("happy");
    }
    const currentGuess = { word: checkedWord, id: crypto.randomUUID() };
    const updatedGuess = [...guesses, currentGuess];
    if (updatedGuess.length === 6 && !success) {
      setStaus("sad");
    }
    setGuesses(updatedGuess);
    const reducedEmptyGuesses = [...emptyGuesses];
    reducedEmptyGuesses.shift();
    setEmptyGuesses(reducedEmptyGuesses);
  };
  // ```html
  // <div class="happy banner">
  //   <p>
  //     <strong>Congratulations!</strong> Got it in
  //     <strong>3 guesses</strong>.
  //   </p>
  // </div>
  // ```

  // ```html
  // <div class="sad banner">
  //   <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  // </div>
  return (
    <>
      <Banner status={status} guesses={guesses.length} word={answer} />
      <DisplayGuesses guesses={guesses} emptyGuesses={emptyGuesses} />
      <Input submitGuess={submitGuess} />
    </>
  );
}

export default Game;
