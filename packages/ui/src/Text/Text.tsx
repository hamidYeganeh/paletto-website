"use client";

import { forwardRef } from "react";
import { Text as BaseText } from "react-aria-components";
import { cn } from "@repo/utils";
import type { TextProps } from "./TextTypes";
import { TextStyles } from "./TextStyles";

const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { className, size, tone, weight, truncate, ...otherProps } = props;

  return (
    <BaseText
      {...otherProps}
      ref={ref}
      className={cn(
        TextStyles.base({ size, tone, weight }),
        TextStyles.truncate({ truncate }),
        className
      )}
    />
  );
});

Text.displayName = "Text";

export default Text;

