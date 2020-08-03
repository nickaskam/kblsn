import React, { FunctionComponent } from "react";

type FooterProps = {
  author: string;
};

export const Footer: FunctionComponent<FooterProps> = ({ author }) => (
  <aside>
    <div>
      <p>This site was made by: {author}</p>
    </div>
  </aside>
);
