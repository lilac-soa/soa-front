import React from "react";
import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "box-border h-[60px] w-[640px] p-4 rounded-lg text-black-100 typo-button-1",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        secondary: "bg-primary-400",
      },
    },
  },
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Determines if the button should take up the full width of its container.
   * When set to true, the button will expand to fill the available width.
   * @default false
   */
  isFullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isFullWidth = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={cn(
        buttonVariants({ variant, className }),
        `${isFullWidth ? "w-full" : "w-[640px]"}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
