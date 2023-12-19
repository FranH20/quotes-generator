import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

const H1 = tw.h1`text-2xl font-bold lg:text-5xl`;
const HeaderTitle = tw(H1)`p-5 text-center mb-10 text-color-lightGreen bg-color-third rounded-lg`;

export const TitleLogo = ({ name }) => <H1 tw="text-white">{name}</H1>;
TitleLogo.propTypes = {
  name: PropTypes.string.isRequired,
};

export const Title = ({ name }) => <HeaderTitle>{name}</HeaderTitle>;
Title.propTypes = {
  name: PropTypes.string.isRequired,
};
