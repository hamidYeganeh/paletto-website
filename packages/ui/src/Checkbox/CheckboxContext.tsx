"use client";

import { createContext } from "react";
import type { CheckboxContextProps } from "./CheckboxTypes";

export const CheckboxContext = createContext<CheckboxContextProps>({});
