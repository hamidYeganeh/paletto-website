"use client";

import { FC, useContext } from "react";
import { CheckboxControlProps } from "./CheckboxTypes";
import { cn } from "@repo/utils";
import { CheckboxStyles } from "./CheckboxStyles";
import CheckboxIndicator from "./CheckboxIndicator";
import { CheckboxContext } from "./CheckboxContext";

const CheckboxControl: FC<CheckboxControlProps> = (props) => {
  const { children, className, ...otherProps } = props;

  const { variant, size, color } = useContext(CheckboxContext);
  const CheckboxControlClassnames = cn(
    CheckboxStyles.control({ variant, size, color }),
    className
  );

  return (
    <span
      className={CheckboxControlClassnames}
      data-slot="checkbox-control"
      {...otherProps}
    >
      {children ?? <CheckboxIndicator />}
    </span>
  );
};
export default CheckboxControl;
