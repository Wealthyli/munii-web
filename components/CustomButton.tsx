"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";
import { CustomButtonProp } from "@/types";

const colors: Record<string, string> = {
  primary: "btn-brand bg-primary text-black ",
  default: "btn-brand text-primary bg-black",
};

type color = string;

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

  const selectedColor = colors[color as string] || colors.default;

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
