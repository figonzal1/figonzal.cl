import React from "react";
import Typewriter from "typewriter-effect";
/**
 * Positions showed with typewritter effect
 * @returns 
 */
function Positions() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Android & AR",
          "Ingeniero Informático",
          "Colaborador Open Source",
          "Apasionado por la tecnología e innovación",
        ],
        autoStart: true,
        loop: true,
        delay: 'natural',
        deleteSpeed: 10,
      }}
    />
  );
}

export default Positions;
