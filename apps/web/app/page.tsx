import Button from "@repo/ui/Button";
import Skeleton from "@repo/ui/Skeleton";
import Checkbox, {
  CheckboxControl,
  CheckboxIndicator,
} from "@repo/ui/Checkbox";
import { cn } from "@repo/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-6 "
      )}
    >
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.2em]">Components</p>
        <h1 className="text-3xl font-semibold">Shared UI Showcase</h1>
        <p className="text-base">
          Buttons inherit tokens from the shared theme and merge class names
          with ease.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant={"contained"} className="w-full" size={"xl"}>
          Contained
        </Button>
        <Button color={"primary"} variant={"outlined"} className="w-full">
          Outlined
        </Button>

        <Skeleton className="size-52" />

        <Checkbox id="checkbox" variant={'default'} color={'primary'} size={'xl'}>
          <CheckboxControl>
            <CheckboxIndicator />
          </CheckboxControl>
        </Checkbox>
        <label htmlFor="checkbox">Checkbox</label>
      </div>
    </main>
  );
}
