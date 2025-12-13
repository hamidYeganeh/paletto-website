"use client";

import { type FC } from "react";
import type { ModalHeadingProps } from "./ModalTypes";
import { Heading as HeadingPrimitive } from "react-aria-components";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";

const ModalHeading: FC<ModalHeadingProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <HeadingPrimitive
      data-slot="modal-heading"
      slot="title"
      className={cn(ModalStyles.heading(), className)}
      {...otherProps}
    >
      {children}
    </HeadingPrimitive>
  );
};

export default ModalHeading;

