import React from "react";

export default props => {
  return <h1 style={{ color: props.hovering ? "blue" : "" }}>Title</h1>;
};
