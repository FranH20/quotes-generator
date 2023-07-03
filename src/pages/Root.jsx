import React from "react";

import tw from "twin.macro";
import { Outlet } from "react-router-dom";

import Footer from "../containers/Footer";
import Navigator from "../containers/Navigator";

const RootHeaderNavigation = tw.header`bg-color-secondary px-8`;
const RootMainPageContainer = tw.main`bg-[url('/img/repeating-chevrons.svg')] px-8 min-h-screen`;

function Root() {
  return (
    <>
      <RootHeaderNavigation>
        <Navigator />
      </RootHeaderNavigation>
      <RootMainPageContainer>
        <Outlet />
      </RootMainPageContainer>
      <Footer />
    </>
  );
}

export default Root;
