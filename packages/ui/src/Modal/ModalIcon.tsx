"use client";

import { type FC } from "react";
import type { ModalIconProps } from "./ModalTypes";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";

const ModalIcon: FC<ModalIconProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      data-slot="modal-icon"
      className={cn(ModalStyles.icon(), className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ModalIcon;

