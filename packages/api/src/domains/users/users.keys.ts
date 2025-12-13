import { createQueryKey } from "../../core/queryKeys";

export const usersKeys = {
  all: () => createQueryKey("users"),
  list: () => createQueryKey("users", "list"),
  detail: (id: string) => createQueryKey("users", "detail", id),
} as const;

