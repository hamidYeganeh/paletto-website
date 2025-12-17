"use client";

import type {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import type { CheckboxProps } from "../Checkbox/CheckboxTypes";

export type ControlledCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<CheckboxProps, "name" | "isSelected" | "defaultSelected" | "onChange"> & {
  control: Control<TFieldValues>;
  name: TName;
  rules?: RegisterOptions<TFieldValues, TName>;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
};

