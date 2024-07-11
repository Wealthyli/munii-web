import Link from "next/link";
import { CustomButtonProp } from "@/types";


const colors = {
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

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    action ? action() : null;
  };

  const selectedColor = colors[color];
  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className={`${selectedColor} ${overrideStyle ? overrideStyle : ""}`}
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
