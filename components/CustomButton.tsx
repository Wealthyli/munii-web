//use client
import Link from "next/link";
import { MouseEventHandler } from "react";
import { CustomButtonProp } from "@/types";

const colors = {
  primary: "btn-brand bg-primary text-black ",
  default: "btn-brand text-primary bg-black",
};

const CustomButton = ({
  color,
  disabled = false,
  routeTo,
  action,
  children,
  overrideStyle,
  ...otherProps
}: CustomButtonProp) => {

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (action) {
      action();
    }
  };

  // var selectedColor:string;

  // color ? selectedColor = colors[color] : selectedColor = colors.default
  const selectedColor = colors[color] || colors.default;

  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className={`${selectedColor} ${overrideStyle || ""}`}
      {...otherProps}
    >
      {routeTo ? (
        <Link passHref legacyBehavior href={routeTo} prefetch={false}>
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
