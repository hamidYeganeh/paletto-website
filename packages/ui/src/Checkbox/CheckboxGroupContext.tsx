"use client";

import { createContext } from "react";
import type { CheckboxVariantProps } from "./CheckboxStyles";

export type CheckboxGroupContextValue = CheckboxVariantProps;

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({});

