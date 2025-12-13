"use client";

import { type FC, useContext, useMemo } from "react";
import type { ModalContainerProps } from "./ModalTypes";
import { Modal as ModalPrimitive, ModalOverlay as ModalOverlayPrimitive } from "react-aria-components";
import { cn } from "@repo/utils";
import { ModalContext } from "./ModalContext";
import { ModalStyles } from "./ModalStyles";

const ModalContainer: FC<ModalContainerProps> = (props) => {
  const {
    backdropClassName,
    children,
    className,
    isDismissable = true,
    placement = "auto",
    scroll = "inside",
    variant = "solid",
    ...overlayProps
  } = props;

  const parentContext = useContext(ModalContext);

  const contextValue = useMemo(
    () => ({ ...parentContext, placement, scroll, variant }),
    [parentContext, placement, scroll, variant]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <ModalOverlayPrimitive
        data-slot="modal-backdrop"
        isDismissable={isDismissable}
        className={cn(ModalStyles.backdrop({ variant }), backdropClassName)}
        {...overlayProps}
      >
        <ModalPrimitive
          data-slot="modal-container"
          data-placement={placement}
          className={cn(ModalStyles.container({ placement, scroll }), className)}
        >
          {children}
        </ModalPrimitive>
      </ModalOverlayPrimitive>
    </ModalContext.Provider>
  );
};

export default ModalContainer;

