import React from "react";

const NotFound = () => {
  return (
    <aside className="bg-color-blackSpace rounded-lg py-5 px-10 text-color-secondary">
      <h1 className="text-5xl sm:text-8xl text-center font-bold">
        ERROR <br/><span className="text-color-primary">404</span>
      </h1>
      <img src="/img/alert-logo.svg" alt="Alert logo" className="w-24 sm:w-40 mx-auto py-2"/>
    </aside>
  );
};

export default NotFound;
