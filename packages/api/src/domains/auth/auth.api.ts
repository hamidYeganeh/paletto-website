import { http } from "../../client/http";
import { endpoints } from "../../client/endpoints";
import type { LoginInput, LoginResult } from "./auth.types";

export async function login(input: LoginInput): Promise<LoginResult> {
  return http<LoginResult>(endpoints.auth.login(), {
    method: "POST",
    body: input,
  });
}
