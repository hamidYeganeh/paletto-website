export const endpoints = {
  auth: {
    login: () => "/api/demo-login",
  },
  users: {
    list: () => "/api/demo-users",
  },
} as const;

