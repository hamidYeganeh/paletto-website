"use client";

import { createContext } from "react";
import type { ModalPlacementType, ModalVariantProps } from "./ModalStyles";

export type ModalContextValue = {
  placement?: ModalPlacementType;
  scroll?: ModalVariantProps["scroll"];
  variant?: ModalVariantProps["variant"];
};

export const ModalContext = createContext<ModalContextValue>({});

