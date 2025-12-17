"use client";

import { PropsWithChildren, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@repo/utils";

const SilkBackground = dynamic(() => import("./SilkBackground"), { ssr: false });

export default function AuthShell(props: PropsWithChildren) {
  const { children } = props;
  const [silkReady, setSilkReady] = useState(false);

  const handleSilkReady = useCallback(() => {
    setSilkReady(true);
  }, []);

  return (
    <div
      aria-busy={!silkReady}
      className={cn("relative h-dvh overflow-hidden bg-primary-500")}
    >
      <div
        className={cn(
          "w-full h-full absolute top-0 left-0 z-10",
          "bg-linear-180 from-black via-primary-950/80 via-30% to-50% to-transparent"
        )}
      ></div>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 opacity-70 mix-blend-overlay transition-opacity duration-200",
          silkReady ? "opacity-100" : "opacity-0"
        )}
      >
        <SilkBackground
          color="oklch(0.4006 0.0525 167.3316)"
          speed={15}
          scale={1}
          noiseIntensity={1}
          onReady={handleSilkReady}
        />
      </div>

      <div className="absolute inset-0 z-10 bg-primary-500/20" />

      <div
        className={cn(
          "relative z-20 size-full transition-opacity duration-200",
          silkReady ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}
