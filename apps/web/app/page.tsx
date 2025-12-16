"use client";

import { Button } from "@repo/ui";
import { cn } from "@repo/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <main className="w-full h-dvh bg-primary-200 p-2">
      <div
        className={cn(
          "relative size-full flex",
          isToggled
            ? "items-start justify-end p-2"
            : "items-center justify-center"
        )}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={cn(
            "rounded-theme-md bg-primary-500 w-48 flex items-center gap-2 p-2",
            isToggled
              ? "h-auth-header-height-mobile flex-row-reverse"
              : "h-auto flex-col"
          )}
        >
          <motion.div
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            layout
            className={cn(
              "bg-red-500 rounded-theme-md",
              isToggled ? "size-6" : "size-auth-header-height-mobile"
            )}
          ></motion.div>

          <div className="w-full h-4 bg-blue-400 rounded-theme-md"></div>
        </motion.div>

        <Button
          className={"fixed bottom-4 right-4 flex-1 block"}
          onClick={() => {
            setIsToggled((v) => !v);
          }}
        >
          TOGGLE
        </Button>
      </div>
    </main>
  );
}
