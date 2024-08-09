import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[16px]" };
const variants = {
  fill: { purple_800: "bg-purple-800 text-white-A700" },
  outline: {
    black_900: "outline outline-[1.5px] outline-black-900 text-black-900",
    purple_800: "outline outline-[1.5px] outline-purple-800 text-purple-800",
  },
};
const sizes = { xs: "p-[12px]", sm: "p-3.5", xxs:"p-[6px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm","xxs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["purple_800", "black_900"]),
};

export { Button };
