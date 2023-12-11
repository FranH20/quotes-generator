import styled from "styled-components";
import tw from "twin.macro";

export const HamburgerContainer = tw.div`
  h-[var(--nav-height)] 
  flex
  flex-row-reverse
  [> svg]:(
    h-full 
    w-8 
    text-color-lightGreen
    mr-[32px]
    cursor-pointer
  )
`;

export const containerVariants = {
  mobile: tw`
    fixed	
    -right-full
    w-2/4
    transition-all
    duration-500
    ease-in-out
    [> ul]:(
      flex-col
      gap-y-3 
      relative
      h-full
      px-6 pt-5
    )
      `,
  desktop: tw`
    [> ul]:(
      h-full
      gap-x-5
      items-center
    )
  `,
};

export const ListContainer = tw.ul`flex`;

export const NavItem = tw.li`
  [> a]:(
    cursor-pointer
    rounded-lg
    block
    p-3
    font-semibold	
    text-color-lightGreen
    text-xl
    md:text-xl
    md:hover:text-color-hardGreen
    sm:max-md:hover:bg-color-hardGreen
    transition-all
    delay-100
  )`;

export const Wrapper = styled.div(() => [
  tw`
    bg-color-secondary
    h-full
    z-50
    `,
  ({ variant = "mobile" }) => containerVariants[variant],
]);