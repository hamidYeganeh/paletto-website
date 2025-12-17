"use client";

import type { InputProps } from "./InputTypes";
import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export type ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<
  InputProps,
  "name" | "value" | "defaultValue" | "onChange" | "onBlur"
> & {
  control: Control<TFieldValues>;
  name: TName;
  rules?: RegisterOptions<TFieldValues, TName>;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
};
