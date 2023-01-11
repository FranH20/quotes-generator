import React from "react";
import Typewriter from 'typewriter-effect';

const TitleWritting = ({wrapperClassName, text, delay, cursorClassName}) => {
  return (
    <Typewriter
        options={{
            strings: text,
            autoStart: true,
            loop: false,
            delay: delay,
            wrapperClassName: wrapperClassName,
            cursorClassName: cursorClassName
        }}
    />
  );
};

export default TitleWritting;
