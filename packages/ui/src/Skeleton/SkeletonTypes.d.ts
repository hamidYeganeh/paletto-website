import type { ComponentPropsWithoutRef } from "react";
import type { SkeletonVariantProps } from "./SkeletonStyles";

export interface SkeletonProps
  extends
    Omit<ComponentPropsWithoutRef<"div">, "children">,
    SkeletonVariantProps {}
