import { cn, cva, type VariantProps } from "@repo/utils";

/* -----------------------------------------------------------------------------
 * Base
 * -------------------------------------------------------------------------- */

const ButtonBaseStyles = cva(
  cn(
    // Layout
    "inline-flex items-center justify-center gap-2",
    "relative overflow-hidden rounded-theme-md outline-none",

    // Motion
    "transition-colors duration-200"
  ),
  {
    variants: {
      /* ---------------------------------------------------------------------
       * Visual Variant
       * ------------------------------------------------------------------ */

      variant: {
        contained: cn(
          "bg-(--main-color)",
          "text-(--text-color)",
          "hover:bg-(--dark-color)"
        ),

        outlined: cn(
          "bg-transparent",
          "ring ring-(--main-color)",
          "text-(--main-color)",
          "hover:bg-(--lighter-color)"
        ),
      },

      /* ---------------------------------------------------------------------
       * Color Tokens
       * ------------------------------------------------------------------ */

      color: {
        primary: cn(
          "[--lighter-color:theme(colors.primary.50)]",
          "[--light-color:theme(colors.primary.100)]",
          "[--main-color:theme(colors.primary.500)]",
          "[--dark-color:theme(colors.primary.600)]",
          "[--darker-color:theme(colors.primary.700)]",
          "[--text-color:theme(colors.primary.50)]"
        ),
        default: cn(
          "[--lighter-color:theme(colors.gray.100)]",
          "[--light-color:theme(colors.gray.300)]",
          "[--main-color:theme(colors.white)]",
          "[--dark-color:theme(colors.gray.600)]",
          "[--darker-color:theme(colors.gray.700)]",
          "[--text-color:theme(colors.gray.900)]"
        ),
      },

      /* ---------------------------------------------------------------------
       * Size
       * ------------------------------------------------------------------ */

      size: {
        xs: "h-10 px-1 text-xs",
        sm: "h-11 px-3 text-xs",
        md: "h-12 px-4 text-sm",
        lg: "h-13 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },

      /* ---------------------------------------------------------------------
       * State
       * ------------------------------------------------------------------ */

      isPending: {
        true: "opacity-70 pointer-events-none",
        false: "",
      },

      isDisabled: {
        true: "opacity-70 pointer-events-none",
        false: "",
      },
    },

    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "md",
      isPending: false,
      isDisabled: false,
    },
  }
);

/* -----------------------------------------------------------------------------
 * Public API
 * -------------------------------------------------------------------------- */

export const ButtonStyles = {
  base: ButtonBaseStyles,
};

export type ButtonVariantProps = VariantProps<typeof ButtonStyles.base>;
