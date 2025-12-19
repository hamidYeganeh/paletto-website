"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import { useTranslations } from "@repo/i18n/client";
import { Logo } from "@repo/ui/Shared/Logo";
import { Button } from "@repo/ui/Button";
import { Input } from "@repo/ui/Input";
import { cn } from "@repo/utils";

/* -------------------------------------------------------------------------- */
/*                                   Config                                   */
/* -------------------------------------------------------------------------- */

const layoutTransition = {
  layout: {
    damping: 200,
    bounce: 1,
    stiffness: 150,
    duration: 0.3,
    // ease: "easeOut",
  },
};

/* -------------------------------------------------------------------------- */
/*                                Login Page                                  */
/* -------------------------------------------------------------------------- */

export default function LoginPage() {
  const [isFocused, setIsFocused] = useState(false);
  const t = useTranslations();

  return (
    <LayoutGroup>
      <AnimatePresence>
        <main className="relative w-full">
          {/* ------------------------------------------------------------------ */}
          {/* Header                                                             */}
          {/* ------------------------------------------------------------------ */}
          <header className="flex h-auth-header-height-mobile items-center px-2">
            <Button size="xs" className="min-w-15">
              FA
            </Button>
          </header>

          {/* ------------------------------------------------------------------ */}
          {/* Logo & App Name                                                     */}
          {/* ------------------------------------------------------------------ */}
          <motion.section
            layout
            transition={layoutTransition}
            className={cn(
              "absolute flex w-fit items-center",
              isFocused
                ? "left-2 top-0 h-auth-header-height-mobile flex-row-reverse gap-2"
                : "left-0 right-0 top-48 mx-auto flex-col gap-4"
            )}
          >
            <Logo size={isFocused ? "xs" : "xl"} />

            <motion.p
              layout
              transition={layoutTransition}
              animate={{ fontSize: isFocused ? "14px" : "16px" }}
              className="select-none font-medium text-white uppercase tracking-widest"
            >
              {t("Common.Metadata.appName")}
            </motion.p>
          </motion.section>

          {/* ------------------------------------------------------------------ */}
          {/* Login Form                                                          */}
          {/* ------------------------------------------------------------------ */}
          {/* <motion.section
            layout
            transition={layoutTransition}
            className={cn(
              "absolute flex w-full flex-col gap-6 p-2",
              isFocused
                ? "top-[calc((--auth-header-height-mobile)+24px)] items-start"
                : "top-96 items-center"
            )}
          >
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={
                isFocused ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              className="text-lg font-bold text-white select-none"
            >
              {t("Auth.Login.form.login-register-label")}
            </motion.p>

            <div className="w-full">
              <Input
                fullWidth
                label={
                  isFocused
                    ? undefined
                    : t("Auth.Login.form.login-register-label")
                }
                placeholder={t("Auth.Login.form.login-register-placeholder")}
                onFocusCapture={() => setIsFocused(true)}
                onBlurCapture={() => setIsFocused(false)}
              />
            </div>

            {!isFocused && (
              <p className="select-none text-lg font-medium text-white">
                {t("Common.general.or")}
              </p>
            )}

            <Button>
              {isFocused
                ? t("Auth.Login.form.login-submit")
                : t("Auth.Login.form.login-with-google")}
            </Button>
          </motion.section> */}
        </main>
      </AnimatePresence>
    </LayoutGroup>
  );
}
