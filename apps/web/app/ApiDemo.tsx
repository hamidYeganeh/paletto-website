"use client";

import type { User } from "@repo/api";
import { useLoginMutation, useUsersQuery } from "@repo/api";
import Button from "@repo/ui/Button";
import Skeleton from "@repo/ui/Skeleton";
import { cn } from "@repo/utils";
import { useState } from "react";

export default function ApiDemo({ initialUsers }: { initialUsers?: User[] }) {
  const { data, isLoading, error, refetch, isFetching } = useUsersQuery({
    initialData: initialUsers,
  });
  const login = useLoginMutation();
  const [email, setEmail] = useState("demo@paletto.dev");
  const [password, setPassword] = useState("password");

  return (
    <section className="w-full max-w-3xl space-y-4 rounded-theme-lg border border-black/10 bg-white/60 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">API Demo</h2>
          <p className="text-sm text-black/60">
            Powered by @repo/api + TanStack Query.
          </p>
        </div>
        <Button
          variant="outlined"
          size="sm"
          isDisabled={isFetching}
          onPress={() => refetch()}
        >
          Refresh users
        </Button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium">GET /api/demo-users</p>
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-5 w-3/5" />
            </div>
          ) : error ? (
            <p className="text-sm text-red-600">
              Failed to load users: {(error as Error).message}
            </p>
          ) : (
            <ul className="space-y-1 text-sm">
              {data?.map((u) => (
                <li key={u.id} className="flex items-center justify-between">
                  <span className="font-medium">{u.name}</span>
                  <span className="text-black/60">{u.email}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">POST /api/demo-login</p>

          <div className="space-y-2">
            <input
              className={cn(
                "w-full rounded-theme-md border border-black/10 bg-white px-3 py-2 text-sm outline-none",
                "focus:ring-2 focus:ring-black/10"
              )}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className={cn(
                "w-full rounded-theme-md border border-black/10 bg-white px-3 py-2 text-sm outline-none",
                "focus:ring-2 focus:ring-black/10"
              )}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="contained"
              size="sm"
              isDisabled={login.isPending}
              onPress={() => login.mutate({ email, password })}
            >
              Login (demo)
            </Button>
            {login.data ? (
              <p className="text-sm text-black/60">
                token: <span className="font-mono">{login.data.token}</span>
              </p>
            ) : null}
          </div>

          {login.error ? (
            <p className="text-sm text-red-600">
              Login failed: {(login.error as Error).message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
