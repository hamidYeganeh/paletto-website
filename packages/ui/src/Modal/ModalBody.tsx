"use client";

import { type FC, useContext } from "react";
import type { ModalBodyProps } from "./ModalTypes";
import { cn } from "@repo/utils";
import { ModalContext } from "./ModalContext";
import { ModalStyles } from "./ModalStyles";

const ModalBody: FC<ModalBodyProps> = (props) => {
  const { children, className, ...otherProps } = props;
  const { scroll } = useContext(ModalContext);

  return (
    <div
      data-slot="modal-body"
      className={cn(ModalStyles.body({ scroll }), className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ModalBody;

