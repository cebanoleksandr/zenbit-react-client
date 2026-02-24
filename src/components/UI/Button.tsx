import type { FC } from "react";
import cn from "classnames";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  mode?: "primary" | "secondary" | "prosparity";
  full?: boolean;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  className = "",
  mode = "primary",
  full = false,
}) => {
  return (
    <button
      onClick={onClick}
      // className={`text-white py-2 px-4 rounded border border-[#B29F7E] cursor-pointer ${className} ${
      //   mode === "primary"
      //     ? "bg-[#172234] text-[#B29F7E] hover:bg-[#263241] active:bg-[#274068]"
      //     : mode === "prosparity"
      //     ? "text-[#B29F7E] hover:bg-black hover:opacity-90 active:bg-black active:opacity-75"
      //     : "bg-[#B29F7E] text-white hover:bg-[#cfbb98] active:bg-[#d8c6a6]"
      // } transition duration-300`}
      className={cn(
        "text-white py-2 px-4 rounded border border-[#B29F7E] cursor-pointer transition duration-300",
        className,
        {
          "bg-[#172234] text-[#B29F7E] hover:bg-[#263241] active:bg-[#274068]": mode === "primary",
          "text-[#B29F7E] hover:bg-black hover:opacity-90 active:bg-black active:opacity-75": mode === "prosparity",
          "bg-[#B29F7E] text-white hover:bg-[#cfbb98] active:bg-[#d8c6a6]": mode === "secondary",
          "w-full": full,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
