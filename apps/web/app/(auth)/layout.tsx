import { PropsWithChildren } from "react";
import AuthShell from "./AuthShell";

export default function AuthRootLayout(props: PropsWithChildren) {
  const { children } = props;
  return <AuthShell>{children}</AuthShell>;
}
