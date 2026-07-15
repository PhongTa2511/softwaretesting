import { User } from "../types";

export const mockUsers: Record<string, User> = {
  "admin@qltest.com": { id: "1", email: "admin@qltest.com", fullName: "Admin User", role: "Admin" },
  "leader@qltest.com": { id: "2", email: "leader@qltest.com", fullName: "Test Leader User", role: "TestLeader" },
  "tester@qltest.com": { id: "3", email: "tester@qltest.com", fullName: "Tester User", role: "Tester" },
  "dev@qltest.com": { id: "4", email: "dev@qltest.com", fullName: "Developer User", role: "Developer" },
};
