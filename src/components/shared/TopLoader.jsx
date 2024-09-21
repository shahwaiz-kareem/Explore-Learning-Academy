"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const TopLoader = ({ color }) => {
  return (
    <ProgressBar
      height="2.6px"
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default TopLoader;
