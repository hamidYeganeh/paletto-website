import Button from "@repo/ui/Button";
import Skeleton from "@repo/ui/Skeleton";
import Checkbox, {
  CheckboxControl,
  CheckboxIndicator,
} from "@repo/ui/Checkbox";
import {
  ModalBody,
  ModalCloseTrigger,
  ModalContainer,
  ModalDialog,
  ModalFooter,
  ModalHeading,
  ModalHeader,
  ModalRoot,
  ModalTrigger,
} from "@repo/ui";
import { cn } from "@repo/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-6 "
      )}
    >
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em]">Components</p>
        <h1 className="text-3xl font-semibold">Shared UI Showcase</h1>
        <p className="text-base">
          Buttons inherit tokens from the shared theme and merge class names
          with ease.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant={"contained"} className="w-full" size={"xl"}>
          Contained
        </Button>
        <Button color={"primary"} variant={"outlined"} className="w-full">
          Outlined
        </Button>

        <Skeleton className="size-52" />

        <Checkbox id="checkbox" variant={"default"} color={"primary"} size={"xl"}>
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
        </Checkbox>
        <label htmlFor="checkbox">Checkbox</label>

        <ModalRoot>
          <ModalTrigger className="rounded-theme-md bg-(--main-color) px-4 py-2 text-(--text-color)">
            Open Modal
          </ModalTrigger>
          <ModalContainer variant="blur" placement="auto">
            <ModalDialog>
              <ModalCloseTrigger
                aria-label="Close modal"
                className="rounded-theme-md bg-black/10 p-2 text-[var(--color-foreground)]"
              />
              <ModalHeader>
                <ModalHeading>Modal Test</ModalHeading>
              </ModalHeader>
              <ModalBody>
                This is a quick demo to verify `@repo/ui/Modal` renders and
                closes correctly.
              </ModalBody>
              <ModalFooter>
                <ModalCloseTrigger className="rounded-theme-md bg-black/10 px-3 py-2">
                  Close
                </ModalCloseTrigger>
              </ModalFooter>
            </ModalDialog>
          </ModalContainer>
        </ModalRoot>
      </div>
    </main>
  );
}
