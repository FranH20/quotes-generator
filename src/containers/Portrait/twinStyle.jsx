import tw from "twin.macro";

export const BodyPortrait = tw.aside`text-color-lightGreen flex justify-between pb-10`;
export const ContentPortrait = tw.div`lg:w-[60%] w-full
[> article]:(max-w-xl flex flex-col gap-y-8 )`;
export const HeaderPortrait = tw.div`
    [> h1]:(text-5xl mb-4)
    [> div]:(text-base h-[170px] sm:h-[100px])`;
export const ButtonsPortrait = tw.div`
    [> section]:(flex sm:flex-row gap-x-4 flex-col gap-y-2)
    [div]:(flex-1)
    [a]:(block py-4 text-base font-bold	)`;
export const PicturePortrait = tw.picture`
    hidden lg:block w-[40%]
    [> img]:(
        mx-auto w-[350px] 
        rounded-3xl border-8 border-color-third 
        outline outline-offset-8 outline-8 outline-white)
`;
