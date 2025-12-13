import { http } from "../../client/http";
import { endpoints } from "../../client/endpoints";
import type { User } from "./users.types";

export async function getUsers(): Promise<User[]> {
  return http<User[]>(endpoints.users.list());
}
