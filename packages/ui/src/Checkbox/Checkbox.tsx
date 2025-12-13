"use client";

import type { FC } from "react";
import type { CheckboxProps } from "./CheckboxTypes";
import { Checkbox as BaseCheckbox } from "react-aria-components";
import { cn } from "@repo/utils";
import { CheckboxStyles } from "./CheckboxStyles";
import { CheckboxContext } from "./CheckboxContext";

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className,
    children,
    variant = "default",
    size = "md",
    color = "primary",
    ...otherProps
  } = props;

  const checkboxClassnames = cn(
    CheckboxStyles.base({ variant, size, color }),
    className
  );

  return (
    <BaseCheckbox
      data-slot="checkbox"
      className={checkboxClassnames}
      data-variant={variant}
      data-size={size}
      data-color={color}
      {...otherProps}
    >
      {(values) => (
        <CheckboxContext value={{ state: values, variant, size, color }}>
          {typeof children === "function" ? children(values) : children}
        </CheckboxContext>
      )}
    </BaseCheckbox>
  );
};
export default Checkbox;
