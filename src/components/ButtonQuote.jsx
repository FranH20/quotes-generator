import React from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const buttonVariants = {
  red: tw`bg-red-600 hover:bg-red-500 text-white`,
  yellow: tw`bg-yellow-400 hover:bg-yellow-300 text-black`,
  blue: tw`bg-blue-700 hover:bg-blue-600 text-white`,
  gray: tw`bg-gray-200 hover:bg-gray-100 text-black`,
  amber: tw`bg-amber-500 hover:bg-amber-400 text-black`,
  green: tw`bg-green-500 hover:bg-green-400 text-black`,
  purple: tw`bg-purple-800 text-white`,
};

const ButtonContainer = styled.button(({ color }) => [
  tw`flex items-center py-2 px-4 gap-x-2 font-bold rounded hover:bg-color-fourth`,
  buttonVariants[color],
]);

export const ButtonBase = forwardRef(({ name, className, onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`${className} border-0 text-center p-2 rounded`}
    >
      {name}
    </button>
  );
});

export const ButtonQuote = ({ name, onClick, children, color }) => {
  return (
    <ButtonContainer onClick={onClick} color={color}>
      {children}
      {name}
    </ButtonContainer>
  );
};

export const ButtonQuoteRed = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="red">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuoteYellow = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="yellow">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuoteBlue = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="blue">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuoteGray = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="gray">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuoteAmber = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="amber">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuoteGreen = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="green">
    {children}
    {name}
  </ButtonQuote>
);

export const ButtonQuotePurple = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="purple">
    {children}
    {name}
  </ButtonQuote>
);

ButtonQuote.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.string,
  children: PropTypes.React,
  color: PropTypes.string,
};

ButtonQuoteRed.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuoteYellow.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuoteBlue.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuoteGray.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuoteAmber.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuoteGreen.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.React,
  onClick: PropTypes.func,
};

ButtonQuotePurple.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};
