import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RadioGroup = ({ children }: Props) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};
