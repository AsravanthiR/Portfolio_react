import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-stack Web Developer Student...",
          "Searching for internship places...",
          "Trying to develop my skills more and more...",
          "Interested to stydy web development more intensively...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
