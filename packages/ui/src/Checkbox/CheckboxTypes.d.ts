import { ComponentPropsWithoutRef } from "react";
import {
  CheckboxProps as BaseCheckboxProps,
  CheckboxRenderProps,
} from "react-aria-components";
import { CheckboxVariantProps } from "./CheckboxStyles";

export interface CheckboxContextProps extends CheckboxVariantProps {
  state?: CheckboxRenderProps;
}
export interface CheckboxControlProps extends ComponentPropsWithoutRef<"span"> {}
export interface CheckboxIndicatorProps extends ComponentPropsWithoutRef<"span"> {
  children?:
    | React.ReactNode
    | ((props: CheckboxRenderProps) => React.ReactNode);
}
export interface CheckboxProps
  extends BaseCheckboxProps, CheckboxVariantProps {}
