"use client";

import { type FC, useContext } from "react";
import type { ModalTriggerProps } from "./ModalTypes";
import { Button as ButtonPrimitive } from "react-aria-components";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";
import { ModalContext } from "./ModalContext";

const ModalTrigger: FC<ModalTriggerProps> = (props) => {
  const { className, ...otherProps } = props;
  useContext(ModalContext);

  return (
    <ButtonPrimitive
      data-slot="modal-trigger"
      className={cn(ModalStyles.trigger(), className)}
      {...otherProps}
    />
  );
};

export default ModalTrigger;

