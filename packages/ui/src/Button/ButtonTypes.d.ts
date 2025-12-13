import type { ComponentPropsWithoutRef } from "react";
import type { ButtonVariantProps } from "./ButtonStyles";

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    ButtonVariantProps {}
