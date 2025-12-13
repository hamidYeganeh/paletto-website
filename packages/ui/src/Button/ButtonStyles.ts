import { cn, cva, type VariantProps } from "@repo/utils";

export const ButtonBaseStyles = cva(
  cn(
    "inline-flex items-center justify-center gap-2 rounded-theme-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50"
  ),
  {
    variants: {
      variant: {
        contained:
          "bg-(--main-color) text-(--text-color) hover:bg-(--dark-color)",
        outlined:
          "bg-transparent ring ring-(--main-color) text-(--main-color) hover:bg-(--lighter-color)",
      },
      color: {
        primary: cn(
          "[--lighter-color:theme(colors.primary.50)]",
          "[--light-color:theme(colors.primary.100)]",
          "[--main-color:theme(colors.primary.500)]",
          "[--dark-color:theme(colors.primary.600)]",
          "[--darker-color:theme(colors.primary.700)]",
          "[--text-color:theme(colors.primary.50)]"
        ),
      },
      size: {
        xs: "h-6 px-1 text-xs",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "md",
    },
  }
);
export const ButtonStyles = {
  base: ButtonBaseStyles,
};
export type ButtonVariantProps = VariantProps<typeof ButtonStyles.base>;
