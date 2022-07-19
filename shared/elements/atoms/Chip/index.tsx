import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Chip = ({ children }: Props) => {
  return <div className="content-chip">{children}</div>;
};
