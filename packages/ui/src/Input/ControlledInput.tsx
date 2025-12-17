"use client";

import React from "react";
import { useController, type FieldValues } from "react-hook-form";
import Input from "./Input";
import type { ControlledInputProps } from "./ControlledInputTypes";

export function ControlledInput<TFieldValues extends FieldValues = FieldValues>(
  props: ControlledInputProps<TFieldValues>
) {
  const { control, name, rules, defaultValue, ...inputProps } = props;

  const { field, fieldState } = useController({
    control,
    name,
    rules,
    defaultValue,
  });

  return (
    <Input
      {...inputProps}
      id={inputProps.id ?? field.name}
      name={field.name}
      value={field.value ?? ""}
      onChange={field.onChange}
      onBlur={field.onBlur}
      isInvalid={inputProps.isInvalid ?? Boolean(fieldState.error)}
      errorMessage={inputProps.errorMessage ?? fieldState.error?.message}
      ref={field.ref}
    />
  );
}
