import React from "react";

const sizeClasses = {
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeExtraBold56: "font-extrabold font-manrope",
  txtLatoRegular14: "font-lato font-normal",
  txtManropeExtraBold48: "font-extrabold font-manrope",
  txtManropeSemiBold24: "font-manrope font-semibold",
  txtRobotoRegular18: "font-normal font-roboto",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtManropeExtraBold40: "font-extrabold font-manrope",
  txtRobotoBold20: "font-bold font-roboto",
  txtLatoRegular16Purple800: "font-lato font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
