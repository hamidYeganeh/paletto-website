"use client";

import type { FC } from "react";
import type { CheckboxGroupProps } from "./CheckboxGroupTypes";
import { CheckboxGroup as BaseCheckboxGroup, FieldError } from "react-aria-components";
import { cn } from "@repo/utils";
import { CheckboxGroupStyles } from "./CheckboxGroupStyles";
import { CheckboxGroupContext } from "./CheckboxGroupContext";
import Label from "../Label/Label";
import Text from "../Text/Text";

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const {
    className,
    children,
    label,
    description,
    errorMessage,
    orientation = "vertical",
    variant = "default",
    size = "md",
    color = "primary",
    ...otherProps
  } = props;

  return (
    <BaseCheckboxGroup
      data-slot="checkbox-group"
      data-orientation={orientation}
      data-variant={variant}
      data-size={size}
      data-color={color}
      className={cn(CheckboxGroupStyles.base({ orientation, size }), className)}
      {...otherProps}
    >
      <CheckboxGroupContext.Provider value={{ variant, size, color }}>
        {label ? (
          <Label data-slot="label">
            {label}
          </Label>
        ) : null}

        {description ? (
          <Text
            slot="description"
            data-slot="description"
            tone="muted"
          >
            {description}
          </Text>
        ) : null}

        <div
          data-slot="checkbox-group-list"
          className={CheckboxGroupStyles.list({ orientation, size })}
        >
          {children}
        </div>

        <FieldError data-slot="error" className={CheckboxGroupStyles.error()}>
          {typeof errorMessage === "function"
            ? (v) => errorMessage({ validationErrors: v.validationErrors })
            : errorMessage}
        </FieldError>
      </CheckboxGroupContext.Provider>
    </BaseCheckboxGroup>
  );
};

export default CheckboxGroup;
