import { cn, cva, type VariantProps } from "@repo/utils";

type ModalPlacement = "auto" | "top" | "center" | "bottom";

const ModalTriggerStyles = cva(
  cn(
    "cursor-pointer outline-none",
    "transition-[transform,background-color,box-shadow] duration-200",
    "motion-reduce:transition-none",
    "focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[var(--color-background)]",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
  )
);

const ModalBackdropStyles = cva(
  cn(
    "fixed inset-0 isolate z-50",
    "h-(--visual-viewport-height)",
    "transition-opacity duration-200",
    "motion-reduce:transition-none"
  ),
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        solid: "bg-black/50 dark:bg-black/60",
        blur: "bg-black/50 backdrop-blur-md dark:bg-black/60",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

const ModalContainerStyles = cva(
  cn(
    "fixed left-1/2 z-50 flex w-full -translate-x-1/2 justify-center px-2 outline-none",
    "max-h-(--visual-viewport-height)",
    "transform-gpu will-change-transform",
    "sm:w-fit sm:p-0"
  ),
  {
    variants: {
      placement: {
        auto: cn(
          "top-[calc(var(--visual-viewport-height)-theme(spacing.2))] -translate-y-full items-end",
          "sm:top-[calc(var(--visual-viewport-height)/2)] sm:-translate-y-1/2 sm:items-center"
        ),
        top: "top-2 items-start sm:top-6",
        center:
          "top-[calc(var(--visual-viewport-height)/2)] -translate-y-1/2 items-center",
        bottom: cn(
          "top-[calc(var(--visual-viewport-height)-theme(spacing.2))] -translate-y-full items-end",
          "sm:top-[calc(var(--visual-viewport-height)-theme(spacing.6))]"
        ),
      } satisfies Record<ModalPlacement, string>,
      scroll: {
        inside: "",
        outside:
          "!h-full !max-h-[var(--visual-viewport-height)] !items-start justify-center overflow-y-auto p-0",
      },
    },
    defaultVariants: {
      placement: "auto",
      scroll: "inside",
    },
  }
);

const ModalDialogStyles = cva(
  cn(
    "relative flex w-full flex-col outline-none",
    "rounded-3xl",
    "bg-overlay shadow-overlay",
    "[&_[data-slot=modal-header]+[data-slot=modal-body]]:pt-2",
    "[&_[data-slot=modal-header]+[data-slot=modal-footer]]:pt-5"
  ),
  {
    variants: {
      scroll: {
        inside: "max-h-[calc(var(--visual-viewport-height)-8rem)] overflow-y-hidden",
        outside: "mx-1 my-16 sm:mx-6",
      },
    },
    defaultVariants: {
      scroll: "inside",
    },
  }
);

const ModalHeaderStyles = cva("flex flex-col gap-3 px-6 pt-6");

const ModalHeadingStyles = cva(
  "text-foreground align-middle text-base font-medium"
);

const ModalIconStyles = cva(
  "flex size-10 shrink-0 select-none items-center justify-center rounded-full"
);

const ModalBodyStyles = cva(
  "flex-1 px-6 py-5 text-sm leading-[1.43] text-[var(--color-muted-foreground)]",
  {
  variants: {
    scroll: {
      inside: "overflow-y-auto",
      outside: "overflow-y-visible",
    },
  },
  defaultVariants: {
    scroll: "inside",
  },
  }
);

const ModalFooterStyles = cva(
  "flex flex-row items-center justify-end gap-2 px-6 pb-6"
);

const ModalCloseTriggerStyles = cva("absolute right-4 top-4");

export const ModalStyles = {
  trigger: ModalTriggerStyles,
  backdrop: ModalBackdropStyles,
  container: ModalContainerStyles,
  dialog: ModalDialogStyles,
  header: ModalHeaderStyles,
  heading: ModalHeadingStyles,
  icon: ModalIconStyles,
  body: ModalBodyStyles,
  footer: ModalFooterStyles,
  closeTrigger: ModalCloseTriggerStyles,
};

export type ModalVariantProps = VariantProps<typeof ModalStyles.backdrop> &
  VariantProps<typeof ModalStyles.container> &
  VariantProps<typeof ModalStyles.dialog> &
  VariantProps<typeof ModalStyles.body>;

export type ModalPlacementType = ModalPlacement;
