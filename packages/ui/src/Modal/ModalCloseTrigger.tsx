"use client";

import { type FC, cloneElement, isValidElement, useContext } from "react";
import type { ModalCloseTriggerProps } from "./ModalTypes";
import { Button as ButtonPrimitive } from "react-aria-components";
import { cn } from "@repo/utils";
import { ModalStyles } from "./ModalStyles";
import { ModalContext } from "./ModalContext";

const DefaultCloseIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ModalCloseTrigger: FC<ModalCloseTriggerProps> = (props) => {
  const { children, className, asChild, ...otherProps } = props;
  useContext(ModalContext);

  const mergedClassName = cn(ModalStyles.closeTrigger(), className);

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      ...(otherProps as Record<string, unknown>),
      className: cn(
        mergedClassName,
        (children.props as { className?: string }).className
      ),
      "data-slot": "modal-close-trigger",
      slot: "close",
    });
  }

  return (
    <ButtonPrimitive
      data-slot="modal-close-trigger"
      slot="close"
      className={mergedClassName}
      {...otherProps}
    >
      {children ?? <DefaultCloseIcon />}
    </ButtonPrimitive>
  );
};

export default ModalCloseTrigger;
