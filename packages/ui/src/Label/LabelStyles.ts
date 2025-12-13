import { cn, cva, type VariantProps } from "@repo/utils";

const LabelBaseStyles = cva(
  cn("text-sm font-medium", "data-[disabled]:opacity-50"),
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
      tone: {
        default: "",
        muted: "text-[var(--color-muted-foreground)]",
        danger: "text-red-600",
      },
    },
    defaultVariants: {
      size: "sm",
      tone: "default",
    },
  }
);

export const LabelStyles = {
  base: LabelBaseStyles,
};

export type LabelVariantProps = VariantProps<typeof LabelStyles.base>;

