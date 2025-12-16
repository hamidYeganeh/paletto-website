import { cva, type VariantProps } from "class-variance-authority";

export const InputStyles = {
  base: cva("group flex flex-col gap-1 data-[hidden=true]:hidden", {
    variants: {
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }),
  label: cva("block text-sm font-normal mb-1.5", {
    variants: {
      color: {
        default: "text-white",
      },
      required: {
        true: "after:content-['*'] after:text-red-500 after:ml-0.5",
        false: "",
      },
    },
    defaultVariants: {
      color: "default",
      required: false,
    },
  }),
  inputWrapper: cva(
    "relative w-full inline-flex tap-highlight-transparent flex-row items-center px-3 gap-3 transition-all duration-200 ease-in-out",
    {
      variants: {
        variant: {
          bordered:
            "ring ring-white/40 input-border-b-glow focus-within:bg-white/5 text-white",
        },
        color: {
          default: "",
        },
        size: {
          xs: "h-10",
          sm: "h-11",
          md: "h-12 px-3",
          lg: "h-13",
          xl: "h-14",
        },
        radius: {
          none: "rounded-none",
          sm: "rounded-sm",
          md: "rounded-theme-md",
          lg: "rounded-lg",
          full: "rounded-full",
        },
        isInvalid: {
          true: "!border-red-500 !text-red-500",
          false: "",
        },
        isDisabled: {
          true: "opacity-50 pointer-events-none bg-zinc-100",
          false: "",
        },
      },
      defaultVariants: {
        variant: "bordered",
        color: "default",
        size: "md",
        radius: "md",
        isInvalid: false,
        isDisabled: false,
      },
    }
  ),
  input: cva(
    "w-full h-full font-normal !bg-transparent outline-none placeholder:text-white placeholder:text-sm focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 file:bg-transparent file:border-0 file:bg-none file:text-sm file:font-medium",
    {
      variants: {
        size: {
          sm: "text-xs",
          md: "text-sm",
          lg: "text-base",
        },
      },
      defaultVariants: {
        size: "md",
      },
    }
  ),
  description: cva("text-xs text-zinc-500 mt-1"),
  errorMessage: cva("text-xs text-red-500 mt-1"),
  clearButton: cva(
    "p-1 rounded-full hover:bg-zinc-200 text-zinc-500 cursor-pointer transition-colors"
  ),
};

export type InputVariantProps = VariantProps<typeof InputStyles.inputWrapper> &
  VariantProps<typeof InputStyles.base>;
