"use client";

import type { ButtonProps } from "../Button/ButtonTypes";
import type { FieldValues, UseFormReturn } from "react-hook-form";

export type ControlledButtonProps<TFieldValues extends FieldValues = FieldValues> =
  Omit<ButtonProps, "isPending" | "type" | "form"> & {
    form: UseFormReturn<TFieldValues>;
    type?: ButtonProps["type"];
    pendingWhileSubmitting?: boolean;
    disableWhileSubmitting?: boolean;
    disableWhenInvalid?: boolean;
  };
