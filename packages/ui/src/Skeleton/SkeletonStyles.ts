import { cn, cva, VariantProps } from "@repo/utils";

const SkeletonBaseStyles = cva(
  cn("bg-gray-400 rounded-theme-md pointer-events-none overflow-hidden"),
  {
    variants: {
      animation: {
        pulse: "animate-pulse",
      },
    },
    defaultVariants: {
      animation: "pulse",
    },
  }
);

export const SkeletonStyles = {
  base: SkeletonBaseStyles,
};

export type SkeletonVariantProps = VariantProps<typeof SkeletonStyles.base>;
