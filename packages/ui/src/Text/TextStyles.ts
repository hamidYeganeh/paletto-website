import { cn, cva, type VariantProps } from "@repo/utils";

const TextBaseStyles = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
    tone: {
      default: "text-[var(--color-foreground)]",
      muted: "text-[var(--color-muted-foreground)]",
      danger: "text-red-600",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "sm",
    tone: "default",
    weight: "regular",
  },
});

const TextTruncateStyles = cva("", {
  variants: {
    truncate: {
      true: cn("truncate"),
      false: "",
    },
  },
  defaultVariants: {
    truncate: false,
  },
});

export const TextStyles = {
  base: TextBaseStyles,
  truncate: TextTruncateStyles,
};

export type TextVariantProps = VariantProps<typeof TextStyles.base> &
  VariantProps<typeof TextStyles.truncate>;

