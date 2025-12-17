"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormProps, type UseFormReturn } from "react-hook-form";
import type { z } from "zod";

export function useZodForm<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  props: Omit<UseFormProps<z.infer<TSchema>>, "resolver"> = {}
): UseFormReturn<z.infer<TSchema>> {
  return useForm<z.infer<TSchema>>({
    ...props,
    resolver: zodResolver(schema),
  });
}

