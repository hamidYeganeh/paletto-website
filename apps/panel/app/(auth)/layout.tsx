import { MediaUrls } from "@/constants/medias.constant";
import { cn } from "@repo/utils";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function AuthRootLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className={cn("h-dvh bg-primary-500 relative z-0")}>
      <div className="size-full absolute inset-0 z-10 mix-blend-overlay">
        <Image
          src={MediaUrls.auth.shadow.src}
          alt={MediaUrls.auth.shadow.alt}
          fill
          className="size-full mix-blend-plus-darker"
        />
      </div>

      <div className="size-full relative z-50">{children}</div>
    </div>
  );
}
