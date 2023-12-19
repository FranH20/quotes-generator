import { Select } from "../../components/Select";
import { InputColor, InputRange } from "../../components/Input";
import tw from "twin.macro";
import { Label } from "../../components/Label";

export const Wrapper = tw.article`flex flex-col gap-y-4`;
export const LabelTextColor = tw(Label)``;
export const InputColorText = tw(InputColor)``;
export const LabelFontText = tw(Label)``;
export const SelectText = tw(Select)``;
export const WrapperFontSize = tw.div``;
export const LabelFontTypeText = tw(Label)``;
export const SelectFonts = tw(Select)``;
export const InputRangeText = tw(InputRange)``