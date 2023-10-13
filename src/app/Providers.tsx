"use client";

import ContextProvider from "../app/context/Context";

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

export function Providers({ children }: ChildrenProps) {
  return <ContextProvider>{children}</ContextProvider>;
}
