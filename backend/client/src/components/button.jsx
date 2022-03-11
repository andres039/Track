import React from "react";
import "bulma/css/bulma.min.css";

const Button = ({ clicked, className, children, value }) => {

  let newClassName = "button" + className + " is-focused" + " is-hovered" + " is-light";

  return (
    <button onClick={clicked} className={newClassName} value={value}>
      {children}
    </button>
  );
};

export default Button;
