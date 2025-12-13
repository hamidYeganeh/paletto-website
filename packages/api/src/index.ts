export { http } from "./client/http";
export { API_BASE_URL } from "./client/config";
export { endpoints } from "./client/endpoints";

export { createQueryClient } from "./core/queryClient";
export { createQueryKey } from "./core/queryKeys";

export { authKeys } from "./domains/auth/auth.keys";
export { login } from "./domains/auth/auth.api";
export { useLoginMutation } from "./domains/auth/auth.hooks";
export type { LoginInput, LoginResult } from "./domains/auth/auth.types";

export { usersKeys } from "./domains/users/users.keys";
export { getUsers } from "./domains/users/users.api";
export { useUsersQuery } from "./domains/users/users.hooks";
export type { User } from "./domains/users/users.types";
