import React from "react";
import tw from "twin.macro";
import PropTypes from "prop-types";

const H1 = tw.h1`text-3xl font-bold lg:text-4xl`;
const HeaderTitle = tw(H1)`py-2 text-center`;

export const TitleLogo = ({ name }) => <H1 tw="text-white">{name}</H1>;
TitleLogo.propTypes = {
  name: PropTypes.string.isRequired,
};

export const Title = ({ name }) => <HeaderTitle>{name}</HeaderTitle>;
Title.propTypes = {
  name: PropTypes.string.isRequired,
};
