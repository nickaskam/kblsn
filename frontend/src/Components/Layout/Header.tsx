import React, { FunctionComponent } from "react";

type HeaderProps = {
  title: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ title }) => (
  <aside>
    <h1>{title}</h1>
  </aside>
);
