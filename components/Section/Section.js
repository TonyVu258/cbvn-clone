import React from "react";

function Section({ css, children }) {
  return <section className={css}>{children}</section>;
}

export default Section;
