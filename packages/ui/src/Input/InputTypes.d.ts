import { InputHTMLAttributes, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { InputStyles } from "./InputStyles";

type InputBaseProps = VariantProps<typeof InputStyles.inputWrapper> &
  VariantProps<typeof InputStyles.base>;

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    InputBaseProps {
  label?: ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left"; // Simplified for now
  placeholder?: string;
  description?: ReactNode;
  errorMessage?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isClearable?: boolean;
  onClear?: () => void;
  fullWidth?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
}
