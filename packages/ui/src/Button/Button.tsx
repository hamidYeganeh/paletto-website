"use client";

import { forwardRef } from "react";
import { cn } from "@repo/utils";
import { ButtonStyles } from "./ButtonStyles";
import type { ButtonProps } from "./ButtonTypes";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    color,
    size,
    type = "button",
    ...otherProps
  } = props;

  const ButtonClassnames = cn(
    ButtonStyles.base({ variant, color, size }),
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={ButtonClassnames}
      {...otherProps}
    />
  );
});

Button.displayName = "Button";

export default Button;
