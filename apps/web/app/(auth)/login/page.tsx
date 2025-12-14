"use client";

import Button from "@repo/ui/Button";
import { cn } from "@repo/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AuthLoginPage() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AnimatePresence>
      <main className="h-dvh">
        <div className="w-full h-18 bg-emerald-100 flex flex-row items-center justify-end px-4">
          <Button size={"md"}>{"-->"}</Button>
        </div>

        <div className="">
          <motion.div
            layout
            transition={{
              layout: {
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            className={cn(
              "absolute bg-emerald-300 flex flex-col items-center justify-center gap-8",
              isFocused ? "top-2 h-12 left-4 w-fit" : "top-52 w-full"
            )}
          >
            <Logo
              direction={isFocused ? "row" : "col"}
              size={isFocused ? "xs" : "md"}
            />
          </motion.div>
          <motion.div className="bg-red-500 overflow-hidden">
            <motion.p
              animate={{
                ...(isFocused
                  ? { y: 50, opacity: 0, display: "none" }
                  : { y: 0, opacity: 1, display: "block" }),
              }}
            >
              بازار آنلاین آثار هنری اصیل
            </motion.p>
          </motion.div>
        </div>

        <div
          className={cn(
            "absolute top-[50dvh] mx-auto w-full px-4 flex flex-col gap-8 items-center"
          )}
        >
          <div
            className="h-12 w-full bg-white"
            onClick={() => setIsFocused(!isFocused)}
          >
            TOGGLE
          </div>

          <p>یا</p>

          <div className="h-12 w-xs bg-blue-200"></div>
        </div>
      </main>
    </AnimatePresence>
  );
}

interface LogoProps {
  direction: "col" | "row";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
const Logo = (props: LogoProps) => {
  const { direction, size = "md" } = props;
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.4, ease: "easeInOut", delay: 0.2 } }}
      className={cn("flex gap-3 items-center", {
        "flex-col": direction === "col",
        "flex-row": direction === "row",
      })}
    >
      <motion.div
        layout
        transition={{
          layout: { duration: 0.4, ease: "easeInOut" },
        }}
        className={cn("size-16 bg-amber-400", {
          "size-5 rounded-theme-xs": size === "xs",
          "size-16 rounded-theme-md": size === "md",
          "size-24 rounded-theme-lg": size === "lg",
        })}
      ></motion.div>
      <motion.p
        layout
        transition={{
          layout: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        Paletto
      </motion.p>
    </motion.div>
  );
};
