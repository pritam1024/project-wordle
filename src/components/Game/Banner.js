import React from "react";

export const Banner = ({ status, word, guesses }) => {
  if (!status) {
    return "";
  }
  return <div className={`${status} banner`}>
      {status === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{word}</strong>.
        </p>
      )}
    </div>
  
};
