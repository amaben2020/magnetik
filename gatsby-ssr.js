import React from "react";

import ThemeProvider from "./../magnetik/src/context/index";
import walesheim from "./src/fonts/Walsheim/GT Walsheim Pro Regular Regular.ttf";
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={walesheim}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
