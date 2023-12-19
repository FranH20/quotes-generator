import React from "react";

import tw from "twin.macro";
import { Outlet } from "react-router-dom";

import Footer from "../containers/Footer";
import Navigator from "../containers/Navigator";

const maxWidth = "max-w-7xl mx-auto";
const RootHeaderNavigation = tw.header`bg-color-secondary px-8 w-full ${maxWidth}`;
const RootMainPageContainer = tw.main`bg-color-secondary px-8 my-12 flex-grow ${maxWidth}`;

function Root() {
  return (
    <div className="bg-color-secondary flex flex-col min-h-screen">
      <RootHeaderNavigation>
        <Navigator />
      </RootHeaderNavigation>
      <RootMainPageContainer>
        <Outlet />
      </RootMainPageContainer>
      <Footer maxWidth={maxWidth} />
    </div>
  );
}

export default Root;
