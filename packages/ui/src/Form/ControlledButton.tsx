"use client";

import React from "react";
import Button from "../Button/Button";
import type { ControlledButtonProps } from "./ControlledButtonTypes";
import type { FieldValues } from "react-hook-form";

export function ControlledButton<
  TFieldValues extends FieldValues = FieldValues,
>(props: ControlledButtonProps<TFieldValues>) {
  const {
    form,
    type,
    pendingWhileSubmitting = true,
    disableWhileSubmitting = true,
    disableWhenInvalid = false,
    isDisabled,
    ...buttonProps
  } = props;

  const isSubmitting = form.formState.isSubmitting;
  const isValid = form.formState.isValid;

  return (
    <Button
      {...buttonProps}
      type={type ?? "submit"}
      isPending={pendingWhileSubmitting ? isSubmitting : undefined}
      isDisabled={
        isDisabled ??
        ((disableWhileSubmitting && isSubmitting) ||
          (disableWhenInvalid && !isValid))
      }
    />
  );
}
