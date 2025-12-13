import { cn, cva, type VariantProps } from "@repo/utils";

/* -----------------------------------------------------------------------------
 * Color Tokens (aligned with Button)
 * -------------------------------------------------------------------------- */

const CheckboxColorTokens = {
  primary: cn(
    "[--lighter-color:theme(colors.primary.50)]",
    "[--light-color:theme(colors.primary.100)]",
    "[--main-color:theme(colors.primary.500)]",
    "[--dark-color:theme(colors.primary.600)]",
    "[--darker-color:theme(colors.primary.700)]",
    "[--checkbox-text:theme(colors.primary.50)]"
  ),
};

/* -----------------------------------------------------------------------------
 * Size Tokens
 * -------------------------------------------------------------------------- */

const CheckboxSizeTokens = {
  xs: {
    control: "size-3 rounded-[4px]",
    indicator: "size-2",
    offset: "group-has-[[data-slot=description]]/checkbox:mt-0",
  },
  sm: {
    control: "size-3.5 rounded-[5px]",
    indicator: "size-2.5",
    offset: "group-has-[[data-slot=description]]/checkbox:mt-0",
  },
  md: {
    control: "size-4 rounded-theme-md",
    indicator: "size-3",
    offset: "group-has-[[data-slot=description]]/checkbox:mt-0.5",
  },
  lg: {
    control: "size-5 rounded-theme-md",
    indicator: "size-4",
    offset: "group-has-[[data-slot=description]]/checkbox:mt-1",
  },
  xl: {
    control: "h-8 w-6 rounded-theme-md",
    indicator: "size-5",
    offset: "group-has-[[data-slot=description]]/checkbox:mt-1.5",
  },
};

/* -----------------------------------------------------------------------------
 * Base (Wrapper)
 * -------------------------------------------------------------------------- */

const CheckboxBaseStyles = cva(
  cn(
    // Layout
    "group/checkbox flex gap-3 cursor-pointer outline-none",
    "items-center has-[[data-slot=description]]:items-start",

    // Disabled
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",

    // Text
    "[&_[data-slot=label]]:select-none",
    "[&_[data-slot=description]]:select-none",
    "[&_[data-slot=description]]:text-sm",
    "[&_[data-slot=description]]:text-[var(--color-muted-foreground)]",

    // Content
    "[&_[data-slot=checkbox-content]]:flex",
    "[&_[data-slot=checkbox-content]]:flex-col",
    "[&_[data-slot=checkbox-content]]:gap-0"
  ),
  {
    variants: {
      variant: {
        default: "",
      },
      color: CheckboxColorTokens,
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "md",
    },
  }
);

/* -----------------------------------------------------------------------------
 * Control (Checkbox Box)
 * -------------------------------------------------------------------------- */

const CheckboxControlStyles = cva(
  cn(
    // Layout
    "relative inline-flex shrink-0 items-center justify-center",
    "overflow-hidden outline-none",

    // Base visuals
    // "bg-[var(--color-background)] shadow-sm",
    "ring-1",

    // Motion
    "transition-[background-color,transform,box-shadow] duration-200",
    "motion-reduce:transition-none",

    // Selection fill
    "before:pointer-events-none before:absolute before:inset-0 before:z-0",
    "before:origin-center before:scale-50 before:opacity-0",
    "before:content-['']",
    "before:bg-[var(--main-color)]",
    "before:transition-[opacity,transform,background-color]",
    "before:duration-200",
    "before:motion-reduce:transition-none",

    // Focus
    "group-focus-visible/checkbox:ring-2",
    "group-focus-visible/checkbox:ring-[var(--main-color)]",
    "group-focus-visible/checkbox:ring-offset-2",
    "group-focus-visible/checkbox:ring-offset-[var(--color-background)]",

    // Interaction
    "group-hover/checkbox:ring-[color-mix(in_oklab,var(--main-color)_30%,transparent)]",
    "group-active/checkbox:scale-95",

    // Selected
    "group-data-[selected]/checkbox:text-[var(--checkbox-text)]",
    "group-data-[selected]/checkbox:ring-transparent",
    "group-data-[selected]/checkbox:before:scale-100",
    "group-data-[selected]/checkbox:before:opacity-100",
    // "group-data-[selected]/checkbox:group-hover/checkbox:before:bg-(--darker-color)",
    // "group-data-[selected]/checkbox:group-hover/checkbox:before:bg-(--dark-color)",

    // Indeterminate
    "group-data-[indeterminate]/checkbox:text-[var(--checkbox-text)]",
    "group-data-[indeterminate]/checkbox:ring-transparent",
    "group-data-[indeterminate]/checkbox:before:scale-100",
    "group-data-[indeterminate]/checkbox:before:opacity-100",
    // "group-data-[indeterminate]/checkbox:group-hover/checkbox:before:bg-(--dark-color)",

    // Invalid
    "group-data-[invalid]/checkbox:ring-red-600/40",
    "group-data-[invalid]/checkbox:before:bg-red-600",
    "group-data-[invalid]/checkbox:text-white"
  ),
  {
    variants: {
      variant: {
        default: "bg-(--lighter-color)",
      },
      color: CheckboxColorTokens,
      size: {
        xs: cn(CheckboxSizeTokens.xs.control, CheckboxSizeTokens.xs.offset),
        sm: cn(CheckboxSizeTokens.sm.control, CheckboxSizeTokens.sm.offset),
        md: cn(CheckboxSizeTokens.md.control, CheckboxSizeTokens.md.offset),
        lg: cn(CheckboxSizeTokens.lg.control, CheckboxSizeTokens.lg.offset),
        xl: cn(CheckboxSizeTokens.xl.control, CheckboxSizeTokens.xl.offset),
      },
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "md",
    },
  }
);

/* -----------------------------------------------------------------------------
 * Indicator
 * -------------------------------------------------------------------------- */

const CheckboxIndicatorStyles = cva(
  cn(
    "relative z-10 flex items-center justify-center text-current",
    "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-2.5",
    "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-3",

    // Checkmark animation
    "[&_[data-slot=checkbox-default-indicator--checkmark]]:transition-all",
    "[&_[data-slot=checkbox-default-indicator--checkmark]]:duration-200",
    "motion-reduce:[&_[data-slot=checkbox-default-indicator--checkmark]]:transition-none",

    "group-data-[selected]/checkbox:[&_[data-slot=checkbox-default-indicator--checkmark]]:transition-[stroke-dashoffset]",
    "group-data-[selected]/checkbox:[&_[data-slot=checkbox-default-indicator--checkmark]]:duration-[250ms]",
    "group-data-[selected]/checkbox:[&_[data-slot=checkbox-default-indicator--checkmark]]:delay-[150ms]",

    // Indeterminate
    "[&_[data-slot=checkbox-default-indicator--indeterminate]]:block"
  ),
  {
    variants: {
      variant: {
        default: "",
      },
      color: CheckboxColorTokens,
      size: {
        xs: cn(
          CheckboxSizeTokens.xs.indicator,
          "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-2",
          "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-2"
        ),
        sm: cn(
          CheckboxSizeTokens.sm.indicator,
          "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-2.5",
          "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-2.5"
        ),
        md: cn(
          CheckboxSizeTokens.md.indicator,
          "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-2.5",
          "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-3"
        ),
        lg: cn(
          CheckboxSizeTokens.lg.indicator,
          "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-3",
          "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-3.5"
        ),
        xl: cn(
          CheckboxSizeTokens.xl.indicator,
          "[&_[data-slot=checkbox-default-indicator--checkmark]]:size-3.5",
          "[&_[data-slot=checkbox-default-indicator--indeterminate]]:size-4"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "md",
    },
  }
);

/* -----------------------------------------------------------------------------
 * Content
 * -------------------------------------------------------------------------- */

const CheckboxContentStyles = cva("flex flex-col gap-0");

/* -----------------------------------------------------------------------------
 * Public API
 * -------------------------------------------------------------------------- */

export const CheckboxStyles = {
  base: CheckboxBaseStyles,
  control: CheckboxControlStyles,
  indicator: CheckboxIndicatorStyles,
  content: CheckboxContentStyles,
};

export type CheckboxVariantProps = VariantProps<typeof CheckboxStyles.base>;
