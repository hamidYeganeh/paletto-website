"use client";

import { useQuery } from "@tanstack/react-query";

import { getUsers } from "./users.api";
import { usersKeys } from "./users.keys";
import type { User } from "./users.types";

export function useUsersQuery(options?: { initialData?: User[] }) {
  return useQuery({
    queryKey: usersKeys.list(),
    queryFn: getUsers,
    initialData: options?.initialData,
  });
}
