"use client";

import { type FC } from "react";
import type { ModalFooterProps } from "./ModalTypes";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";

const ModalFooter: FC<ModalFooterProps> = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      data-slot="modal-footer"
      className={cn(ModalStyles.footer(), className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ModalFooter;

