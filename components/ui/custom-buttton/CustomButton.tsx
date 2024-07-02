import Link from "next/link";
import { CustomButtonProp } from "@/types";


const colors = {
  primary: "btn-brand bg-brand-blue text-white ",
  default: "btn-brand text-grey/50 border",
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

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    // action ? action() : null;
  };

  const selectedColor = 1  //colors[color];
  return (
    <button
      // onClick={handleButtonClick}
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
