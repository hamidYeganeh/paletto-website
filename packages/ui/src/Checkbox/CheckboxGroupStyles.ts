import { cn, cva, type VariantProps } from "@repo/utils";

const CheckboxGroupBaseStyles = cva("flex flex-col gap-2", {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    size: "md",
  },
});

const CheckboxGroupListStyles = cva("flex", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row flex-wrap items-center",
    },
    size: {
      xs: "gap-2",
      sm: "gap-2.5",
      md: "gap-3",
      lg: "gap-3.5",
      xl: "gap-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    size: "md",
  },
});

const CheckboxGroupErrorStyles = cva(
  cn("text-sm", "text-red-600", "data-[disabled]:opacity-50")
);

export const CheckboxGroupStyles = {
  base: CheckboxGroupBaseStyles,
  list: CheckboxGroupListStyles,
  error: CheckboxGroupErrorStyles,
};

export type CheckboxGroupVariantProps = VariantProps<
  typeof CheckboxGroupStyles.base
> &
  VariantProps<typeof CheckboxGroupStyles.list>;
