"use client";

import { useThemeMode } from "@repo/theme";
import Button from "@repo/ui/Button";
import { cn } from "@repo/utils";

export default function ThemeControls() {
  const { mode, setMode, toggleMode } = useThemeMode();

  return (
    <section className="w-full max-w-3xl space-y-3 rounded-theme-lg border border-black/10 bg-white/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-black/60">
            Mode switch using next-themes.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-black/60">Mode:</span>
        {(["light", "dark"] as const).map((m) => (
          <Button
            key={m}
            // variant={m === mode ? "contained" : "outlined"}
            size="sm"
            className={cn("min-w-24")}
            onPress={() => setMode(m)}
          >
            {m}
          </Button>
        ))}
        <Button
          variant="outlined"
          size="sm"
          className={cn("min-w-24")}
          onPress={() => toggleMode()}
        >
          Toggle
        </Button>
      </div>
    </section>
  );
}
