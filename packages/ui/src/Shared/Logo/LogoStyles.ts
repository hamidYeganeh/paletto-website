import { cn, cva, VariantProps } from "@repo/utils";

const LogoBaseStyles = cva(cn("transition-all duration-300"), {
  variants: {
    color: {
      primary: "[&_path]:fill-secondary-500",
      secondary: "[&_path]:fill-secondary-500",
    },
    size: {
      xs: "w-7 h-5",
      sm: "",
      md: "",
      lg: "",
      xl: "w-20 h-16",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export const LogoStyles = {
  base: LogoBaseStyles,
};

export type LogoVariantProps = VariantProps<typeof LogoStyles.base>;
