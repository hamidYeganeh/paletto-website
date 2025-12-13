"use client";

import { forwardRef, type MouseEvent } from "react";
import { cn } from "@repo/utils";
import { ButtonStyles } from "./ButtonStyles";
import type { ButtonProps } from "./ButtonTypes";
import { Button as BaseButton } from "react-aria-components";
import { useRipple } from "@repo/hooks/useRipple";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    color,
    size,
    type,
    children,
    isPending,
    isDisabled,
    onClick,
    disabledRipples,
    ...otherProps
  } = props;

  const { createRipple } = useRipple();

  const ButtonClassnames = cn(
    ButtonStyles.base({ variant, color, size, isPending, isDisabled }),
    className
  );

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (!disabledRipples) {
      createRipple(event);
    }

    if (onClick) {
      onClick(event);
    }
  }

  return (
    <BaseButton
      data-slot="button"
      type={type ?? "button"}
      isPending={isPending ?? false}
      onClick={(event) => {
        handleClick(event as MouseEvent<HTMLButtonElement>);
      }}
      className={ButtonClassnames}
      {...otherProps}
    >
      {children}
    </BaseButton>
  );
});

Button.displayName = "Button";

export default Button;
