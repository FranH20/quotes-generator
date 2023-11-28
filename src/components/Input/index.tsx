import tw from "twin.macro";

const Input = tw.input`
  text-base
`;

export const InputFile = tw(Input)`
  bg-gray-200 
  border 
  cursor-pointer
  rounded 
  w-full 
`;

export const InputRange = tw(Input)``;

export const InputColor = tw(Input)`
  cursor-pointer
`;

