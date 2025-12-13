import type { ComponentPropsWithoutRef } from "react";
import type { ButtonVariantProps } from "./ButtonStyles";
import type { ButtonProps as ButtonPrimitiveProps } from "react-aria-components";

// export interface ButtonProps
//   extends Omit<ComponentPropsWithoutRef<"button">, "color">,
//     ButtonVariantProps {}

export interface ButtonProps
  extends ButtonVariantProps, Omit<ButtonPrimitiveProps, "size" | "color"> {
  disabledRipples?: boolean;
}
