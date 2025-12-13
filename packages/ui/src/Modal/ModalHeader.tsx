"use client";

import { type FC } from "react";
import type { ModalHeaderProps } from "./ModalTypes";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";

const ModalHeader: FC<ModalHeaderProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      data-slot="modal-header"
      className={cn(ModalStyles.header(), className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ModalHeader;

