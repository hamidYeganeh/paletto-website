"use client";

import { forwardRef } from "react";
import { Label as BaseLabel } from "react-aria-components";
import { cn } from "@repo/utils";
import type { LabelProps } from "./LabelTypes";
import { LabelStyles } from "./LabelStyles";

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { className, size, tone, ...otherProps } = props;

  return (
    <BaseLabel
      {...otherProps}
      ref={ref}
      className={cn(LabelStyles.base({ size, tone }), className)}
    />
  );
});

Label.displayName = "Label";

export default Label;

