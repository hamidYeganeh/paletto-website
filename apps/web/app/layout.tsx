import type { Metadata } from "next";
import localFont from "next/font/local";
import type { Locale } from "@repo/i18n/config";
import { resolveLocale } from "@repo/i18n/utils";
import { getMessages } from "@repo/i18n/server";
import { cookies, headers } from "next/headers";
import Providers from "./Providers";
import { getDefaultMetadata } from "./seo";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = getDefaultMetadata();

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const locale: Locale = resolveLocale({
    locale:
      cookieStore.get("NEXT_LOCALE")?.value ?? cookieStore.get("locale")?.value,
    acceptLanguage: headerStore.get("accept-language"),
  });

  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
