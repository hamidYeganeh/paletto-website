import type { ReactNode } from "react";
import type { CheckboxGroupProps as BaseCheckboxGroupProps } from "react-aria-components";
import type { CheckboxVariantProps } from "./CheckboxStyles";
import type { CheckboxGroupVariantProps } from "./CheckboxGroupStyles";

export interface CheckboxGroupProps
  extends Omit<BaseCheckboxGroupProps, "children">,
    CheckboxVariantProps,
    CheckboxGroupVariantProps {
  label?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  errorMessage?:
    | ReactNode
    | ((validation: { validationErrors: string[] }) => ReactNode);
}

