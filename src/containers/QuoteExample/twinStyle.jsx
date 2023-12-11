import tw from "twin.macro";

const ArticleCart = tw.article`px-8 py-4 rounded-xl`

export const BodyQuoteExample = tw.aside`py-8 sm:py-12 flex flex-col gap-y-8 gap-x-4 md:flex-row`;

export const SelectorsQuoteExample = tw(ArticleCart)`bg-color-fourth text-base text-color-lightGreen font-bold
    md:w-[60%]
    [> p]:(mb-3)`;
export const SelectQuoteExample = tw.div`sm:hidden`
export const ButtonsQuoteExample = tw.div`hidden sm:flex flex-wrap justify-start gap-2`
export const ResponseQuoteExample = tw(ArticleCart)`bg-color-third md:w-[40%]`