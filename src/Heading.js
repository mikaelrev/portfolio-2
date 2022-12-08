import React from "react";

function Heading({ size = "1", content }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading>{content}</VariableHeading>;
}

export default Heading;
