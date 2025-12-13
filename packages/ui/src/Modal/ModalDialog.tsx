"use client";

import { type FC, useContext } from "react";
import type { ModalDialogProps } from "./ModalTypes";
import { Dialog as DialogPrimitive } from "react-aria-components";
import { cn } from "@repo/utils";
import { ModalContext } from "./ModalContext";
import { ModalStyles } from "./ModalStyles";

const ModalDialog: FC<ModalDialogProps> = (props) => {
  const { children, className, ...otherProps } = props;
  const { scroll } = useContext(ModalContext);

  return (
    <DialogPrimitive
      data-slot="modal-dialog"
      className={cn(ModalStyles.dialog({ scroll }), className)}
      {...otherProps}
    >
      {children}
    </DialogPrimitive>
  );
};

export default ModalDialog;

