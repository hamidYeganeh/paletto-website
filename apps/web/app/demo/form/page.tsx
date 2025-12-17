"use client";

import { z } from "zod";
import {
  ControlledButton,
  ControlledCheckbox,
  ControlledInput,
  useZodForm,
} from "@repo/ui/Form";
import { CheckboxControl } from "@repo/ui/Checkbox";
import { useState } from "react";

const DemoSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms: z.boolean().refine((v) => v, "You must accept the terms"),
});

export default function FormDemoPage() {
  const [submitted, setSubmitted] = useState<z.infer<typeof DemoSchema> | null>(
    null
  );

  const form = useZodForm(DemoSchema, {
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  return (
    <main className="min-h-dvh bg-primary-200 p-6 flex items-start justify-center">
      <div className="w-full max-w-lg rounded-theme-lg bg-primary-500 p-6">
        <h1 className="text-white text-xl font-semibold mb-4">
          RHF + Zod Demo
        </h1>

        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit((values) => {
            setSubmitted(values);
          })}
        >
          <ControlledInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="you@example.com"
            fullWidth
            isClearable
          />

          <ControlledInput
            control={form.control}
            name="password"
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            fullWidth
            isClearable
          />

          <ControlledCheckbox control={form.control} name="terms">
            <CheckboxControl />
            <div data-slot="checkbox-content">
              <span data-slot="label" className="text-white">
                Accept terms
              </span>
              {form.formState.errors.terms?.message ? (
                <span data-slot="description" className="text-red-200">
                  {String(form.formState.errors.terms.message)}
                </span>
              ) : null}
            </div>
          </ControlledCheckbox>

          <div className="flex items-center gap-3 pt-2">
            <ControlledButton
              form={form}
              disableWhileSubmitting
              disableWhenInvalid
              pendingWhileSubmitting
            >
              Submit
            </ControlledButton>
          </div>

          {submitted ? (
            <pre className="mt-2 rounded-theme-md bg-primary-200/30 p-3 text-xs text-white overflow-auto">
              {JSON.stringify(submitted, null, 2)}
            </pre>
          ) : null}
        </form>
      </div>
    </main>
  );
}
