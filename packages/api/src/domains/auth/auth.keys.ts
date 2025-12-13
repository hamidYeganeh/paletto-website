import { createQueryKey } from "../../core/queryKeys";

export const authKeys = {
  all: () => createQueryKey("auth"),
} as const;

