import { ReactNode } from "react";

type Props = {
  selected: boolean;
  children: ReactNode;
};

export const RadioButton = ({ selected, children }: Props) => {
  return (
    <div className="content-radio-button">
      <span className={`rounded-check ${selected && "selected"}`}></span>
      <div className="label-radio-button">{children}</div>
    </div>
  );
};
