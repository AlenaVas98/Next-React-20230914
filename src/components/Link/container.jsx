"use client";
import { useContext } from "react";
import { MainLink } from "./component";
import { ThemeContext } from "../Context/ThemeContext/component";

export const MainLinkContainer = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  return <MainLink theme={theme} {...props}></MainLink>;
};
