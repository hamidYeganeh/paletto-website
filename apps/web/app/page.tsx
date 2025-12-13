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
import { cookies, headers } from "next/headers";
import type { Locale } from "@repo/i18n/config";
import { resolveLocale } from "@repo/i18n/utils";
import I18nDemo from "./I18nDemo";
import ApiDemo from "./ApiDemo";
import { endpoints } from "@repo/api";
import type { User } from "@repo/api";
import ThemeControls from "./ThemeControls";

export default async function Home() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale: Locale = resolveLocale({
    locale:
      cookieStore.get("NEXT_LOCALE")?.value ?? cookieStore.get("locale")?.value,
    acceptLanguage: headerStore.get("accept-language"),
  });

  const proto = headerStore.get("x-forwarded-proto") ?? "http";
  const host =
    headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "";

  const initialUsers: User[] =
    host.length > 0
      ? await fetch(`${proto}://${host}${endpoints.users.list()}`, {
          cache: "no-store",
        }).then((r) => r.json())
      : [];

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-6 "
      )}
    >
      <I18nDemo locale={locale} />
      <ThemeControls />
      <ApiDemo initialUsers={initialUsers} />

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant={"contained"} className="w-full" size={"xl"}>
          Contained
        </Button>
        <Button color={"primary"} variant={"outlined"} className="w-full">
          Outlined
        </Button>

        <Skeleton className="size-52" />

        <Checkbox
          id="checkbox"
          variant={"default"}
          color={"primary"}
          size={"xl"}
        >
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
