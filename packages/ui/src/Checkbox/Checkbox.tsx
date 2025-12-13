"use client";

import { type FC, useContext } from "react";
import type { CheckboxProps } from "./CheckboxTypes";
import { Checkbox as BaseCheckbox } from "react-aria-components";
import { cn } from "@repo/utils";
import { CheckboxStyles } from "./CheckboxStyles";
import { CheckboxContext } from "./CheckboxContext";
import { CheckboxGroupContext } from "./CheckboxGroupContext";

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className,
    children,
    variant: variantProp,
    size: sizeProp,
    color: colorProp,
    ...otherProps
  } = props;

  const groupDefaults = useContext(CheckboxGroupContext);
  const variant = variantProp ?? groupDefaults.variant ?? "default";
  const size = sizeProp ?? groupDefaults.size ?? "md";
  const color = colorProp ?? groupDefaults.color ?? "primary";

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
        <CheckboxContext.Provider value={{ state: values, variant, size, color }}>
          {typeof children === "function" ? children(values) : children}
        </CheckboxContext.Provider>
      )}
    </BaseCheckbox>
  );
};
export default Checkbox;
