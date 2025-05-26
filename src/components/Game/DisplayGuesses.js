import React, { useState } from "react";
const Allowedguesses = 6;
export const DisplayGuesses = ({ guesses, emptyGuesses }) => {
  return (
    <div className="guess-results">
      {guesses.map(({ word, id }) => {
        return (
          <p className="guess" key={id}>
            {word.map(({ letter, status }, index) => (
              <span className={`cell ${status}`} key={`${id}-${index}`}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}

      {emptyGuesses.map((placeHolder) => {
        return (
          <p className="guess" key={placeHolder}>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
            <span className="cell"></span>
          </p>
        );
      })}
    </div>
  );
};
