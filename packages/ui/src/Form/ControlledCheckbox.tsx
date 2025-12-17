"use client";

import React from "react";
import { useController, type FieldValues } from "react-hook-form";
import Checkbox from "../Checkbox/Checkbox";
import type { ControlledCheckboxProps } from "./ControlledCheckboxTypes";

export function ControlledCheckbox<
  TFieldValues extends FieldValues = FieldValues,
>(props: ControlledCheckboxProps<TFieldValues>) {
  const { control, name, rules, defaultValue, ...checkboxProps } = props;

  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
  });

  return (
    <Checkbox
      {...checkboxProps}
      name={field.name}
      isSelected={Boolean(field.value)}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={checkboxProps.isInvalid ?? Boolean(fieldState.error)}
    />
  );
}
