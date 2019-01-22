import React from "react";

export default props => {
  return <p style={props.hovering ? { color: "orange" } : {}}>info</p>;
};
