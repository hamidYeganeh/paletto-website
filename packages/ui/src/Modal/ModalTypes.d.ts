import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from "react";
import type {
  ButtonProps as ButtonPrimitiveProps,
  DialogProps as DialogPrimitiveProps,
  DialogTriggerProps as DialogTriggerPrimitiveProps,
  HeadingProps as HeadingPrimitiveProps,
  ModalOverlayProps as ModalOverlayPrimitiveProps,
  ModalRenderProps,
} from "react-aria-components";
import type { ModalPlacementType, ModalVariantProps } from "./ModalStyles";

export type ModalPlacement = ModalPlacementType;

export interface ModalRootProps extends DialogTriggerPrimitiveProps {}

export interface ModalTriggerProps
  extends Omit<ButtonPrimitiveProps, "size" | "color"> {}

export interface ModalContainerProps
  extends Omit<ModalOverlayPrimitiveProps, "children" | "className">,
    Pick<ModalVariantProps, "variant" | "scroll"> {
  placement?: ModalPlacement;
  className?: string;
  backdropClassName?: string;
  children?: ReactNode | ((props: ModalRenderProps) => ReactNode);
}

export interface ModalDialogProps extends DialogPrimitiveProps {}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}
export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalHeadingProps extends HeadingPrimitiveProps {}
export interface ModalIconProps extends HTMLAttributes<HTMLDivElement> {}

export interface ModalCloseTriggerProps
  extends Omit<ButtonPrimitiveProps, "size" | "color"> {
  asChild?: boolean;
  children?: ReactNode;
}

