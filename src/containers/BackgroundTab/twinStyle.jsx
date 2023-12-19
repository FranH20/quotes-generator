import tw from "twin.macro";
import { Label } from "../../components/Label";
import { InputFile, InputRange } from "../../components/Input";

export const Wrapper = tw.article`flex flex-col gap-y-4`;
export const LabelBackgroundImage = tw(Label)``;
export const LabelBackgroundOpacity = tw(Label)``;
export const InputFileBackground = tw(InputFile)``;
export const InputRangeBackground = tw(InputRange)``;