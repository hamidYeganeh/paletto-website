"use client";

import { type FC, useMemo } from "react";
import type { ModalRootProps } from "./ModalTypes";
import { DialogTrigger as DialogTriggerPrimitive } from "react-aria-components";
import { ModalContext } from "./ModalContext";

const ModalRoot: FC<ModalRootProps> = (props) => {
  const { children, ...otherProps } = props;

  const contextValue = useMemo(() => ({}), []);

  return (
    <ModalContext.Provider value={contextValue}>
      <DialogTriggerPrimitive data-slot="modal-root" {...otherProps}>
        {children}
      </DialogTriggerPrimitive>
    </ModalContext.Provider>
  );
};

export default ModalRoot;
