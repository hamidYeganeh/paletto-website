"use client";

import { FC, useContext } from "react";
import { CheckboxIndicatorProps } from "./CheckboxTypes";
import { CheckboxRenderProps } from "react-aria-components";
import { CheckboxContext } from "./CheckboxContext";
import { cn } from "@repo/utils";
import { CheckboxStyles } from "./CheckboxStyles";

const CheckboxIndicator: FC<CheckboxIndicatorProps> = (props) => {
  const { children, className, ...otherProps } = props;

  const { state, variant, size, color } = useContext(CheckboxContext);

  const isIndeterminate = state?.isIndeterminate;
  const isSelected = state?.isSelected;
  const CheckboxClassnames = cn(
    CheckboxStyles.indicator({ variant, size, color }),
    className
  );
  const content =
    typeof children === "function" ? (
      children(state ?? ({} as CheckboxRenderProps))
    ) : children ? (
      children
    ) : isIndeterminate ? (
      <svg
        aria-hidden="true"
        data-slot="checkbox-default-indicator--indeterminate"
        fill="none"
        role="presentation"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <line x1="21" x2="3" y1="12" y2="12" />
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        data-slot="checkbox-default-indicator--checkmark"
        fill="none"
        role="presentation"
        stroke="currentColor"
        strokeDasharray={22}
        strokeDashoffset={isSelected ? 44 : 66}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 17 18"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    );

  return (
    <span
      aria-hidden="true"
      className={CheckboxClassnames}
      data-slot="checkbox-indicator"
      {...otherProps}
    >
      {content}
    </span>
  );
};
export default CheckboxIndicator;
