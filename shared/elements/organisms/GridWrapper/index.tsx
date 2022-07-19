import { FC, ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const GridWrapper: FC<Props> = ({ className, children }) => (
  <section className={className}>
    <div className="container-wrapper">
      <div className="grid-container">{children}</div>
    </div>
  </section>
);
