import type { FC } from "react";
import type { SkeletonProps } from "./SkeletonTypes";
import { cn } from "@repo/utils";
import { SkeletonStyles } from "./SkeletonStyles";

const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, animation, ...otherProps } = props;

  const SkeletonClassnames = cn(SkeletonStyles.base({ animation }), className);

  return <div className={SkeletonClassnames} {...otherProps} />;
};

Skeleton.displayName = "Skeleton";

export default Skeleton;
