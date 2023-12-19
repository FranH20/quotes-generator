import tw from "twin.macro";

// Buttons
export const PhraseGeneratorContainer = tw.section`w-full`;
export const WrapperGenerator = tw.article`flex flex-col gap-y-5`;
export const OptionsSizeContainer = tw.ul`flex flex-row justify-between text-sm md:text-lg`;
// Image
export const WrapperCreator = tw.article`text-white bg-color-third min-h-[350px] grid items-center justify-items-center	`;
export const Creator = tw.div`bg-color-third w-full h-auto`;
export const CreatorBox = tw.div`relative overflow-hidden transition-all duration-300 w-full h-full mx-auto`;
export const CreatorBoxImage = tw.div`bg-[url('/img/background-example.jpg')] absolute bg-cover w-full h-full bg-no-repeat`;
export const CreatorBoxTitleQuote = tw.div`-translate-x-2/4 -translate-y-1/2 top-[45%] absolute left-2/4 w-full px-8
  [> p]:(text-center text-xl md:text-2xl)`;
export const CreatorBoxAuthorQuote = tw.span`-translate-x-2/4 top-[85%] absolute left-2/4 text-xl w-full text-center`;
