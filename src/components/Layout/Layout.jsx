import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import { BoxStyled } from "./Layout.styled";

export const Layout = () => {
  return (
    <BoxStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BoxStyled>
  );
};
