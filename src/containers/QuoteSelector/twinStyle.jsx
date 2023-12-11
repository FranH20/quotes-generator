import tw from "twin.macro";

export const ContentQuoteSelector = tw.p`text-lg relative
    [> span]:(text-xl)
    [> em]:(block)
`
export const CopyButtonQuoteSelector = tw.button`bg-transparent border-2 border-color-lightGreen w-full my-4 py-2 
    text-sm text-color-lightGreen rounded-md flex items-center justify-center gap-x-2
    [> img]:(w-[16px] h-[16px])
`