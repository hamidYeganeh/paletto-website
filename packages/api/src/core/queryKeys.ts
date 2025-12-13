export type QueryKeyPart = string | number | boolean | null | undefined;

export function createQueryKey(...parts: QueryKeyPart[]) {
  return parts.filter((p) => p !== undefined) as readonly QueryKeyPart[];
}

