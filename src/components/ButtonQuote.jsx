import React,{ forwardRef }  from "react";
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";

const buttonVariants = {
  red: tw`bg-red-600 hover:bg-red-500 text-white`,
  yellow: tw`bg-yellow-400 hover:bg-yellow-300 text-black`,
  blue: tw`bg-blue-700 hover:bg-blue-600 text-white`,
  gray: tw`bg-gray-200 hover:bg-gray-100 text-black`,
  amber: tw`bg-amber-500 hover:bg-amber-400 text-black`,
  green: tw`bg-green-500 hover:bg-green-400 text-black`,
  purple: tw`bg-purple-800 text-white`,
  "yellow-fancy": tw`bg-color-third text-color-lightGreen border border-color-lightGreen`,
};

const ButtonContainer = styled.button(({ color, active }) => [
  tw`flex items-center py-2 px-4 gap-x-2 font-bold rounded-md disabled:opacity-75`,
  buttonVariants[color],
  active && tw`bg-gradient-to-r from-color-primary to-color-fourth`
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

export const ButtonQuote = ({ name, onClick, children, color, disabled = false, active = false }) => {
  return (
    <ButtonContainer onClick={onClick} color={color} disabled={disabled} active={active}>
      {children}
      {name}
    </ButtonContainer>
  );
};

export const ButtonQuoteRed = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="red" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteYellow = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="yellow" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteBlue = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="blue" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteGray = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="gray" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteAmber = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="amber" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteGreen = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="green" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuotePurple = ({ name, onClick, children }) => (
  <ButtonQuote onClick={onClick} color="purple" name={name}>
    {children}
  </ButtonQuote>
);

export const ButtonQuoteFancyYellow = ({ name, onClick, children, disabled, active = false }) => (
  <ButtonQuote onClick={onClick} color="yellow-fancy" name={name} disabled={disabled} active={active}>
    {children}
  </ButtonQuote>
)

ButtonQuote.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ButtonQuoteRed.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteYellow.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteBlue.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteGray.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteAmber.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteGreen.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuotePurple.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
};

ButtonQuoteFancyYellow.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.element,
  onClick: PropTypes.func,
  active: PropTypes.bool
};
