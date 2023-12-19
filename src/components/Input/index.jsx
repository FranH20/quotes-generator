import tw from "twin.macro";

const Input = tw.input`
  text-base
`;

export const InputFile = tw(Input)`
  border 
  cursor-pointer
  rounded 
  w-full 
`;

export const InputRange = tw(Input)`accent-color-third w-full`;

export const InputColor = tw(Input)`
  cursor-pointer
`;

