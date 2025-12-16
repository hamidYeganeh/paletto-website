import { cn } from "@repo/utils";
import { PropsWithChildren, Suspense } from "react";
import SilkBackground from "./SilkBackground";

export default function AuthRootLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className={cn("relative h-dvh overflow-hidden bg-primary-500")}>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-70 mix-blend-overlay">
        <Suspense>
          <SilkBackground
            color="var(--primary-800)"
            speed={15}
            scale={1}
            noiseIntensity={1}
          />
        </Suspense>
      </div>
      <div className="absolute inset-0 z-10 bg-primary-500/20" />
      <div className="relative z-20 size-full">{children}</div>
    </div>
  );
}
