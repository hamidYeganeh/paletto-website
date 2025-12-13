"use client";

import type { Locale } from "@repo/i18n/config";
import { locales } from "@repo/i18n/config";
import { useTranslations } from "@repo/i18n/client";
import Button from "@repo/ui/Button";
import { cn } from "@repo/utils";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = useTranslations("Common");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="text-sm text-black/60">{t("language")}:</span>
      {locales.map((nextLocale) => (
        <Button
          key={nextLocale}
          variant={nextLocale === locale ? "contained" : "outlined"}
          size="sm"
          isDisabled={isPending}
          className={cn("min-w-24", isPending && "opacity-70")}
          onPress={() => {
            startTransition(() => {
              document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
              router.refresh();
            });
          }}
        >
          {nextLocale === "en" ? t("english") : t("french")}
        </Button>
      ))}
    </div>
  );
}

export default function I18nDemo({ locale }: { locale: Locale }) {
  const tHome = useTranslations("Home");

  return (
    <div className="space-y-3 text-center">
      <h1 className="text-3xl font-semibold">{tHome("title")}</h1>
      <p className="text-base">{tHome("subtitle")}</p>
      <LocaleSwitcher locale={locale} />
    </div>
  );
}
