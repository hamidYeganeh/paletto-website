"use client";

import type { Messages } from "@repo/i18n";
import { NextIntlClientProvider } from "@repo/i18n/client";
import type { Locale } from "@repo/i18n/config";
import { createQueryClient } from "@repo/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: Locale;
  messages: Messages;
}) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
}

