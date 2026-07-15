import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, LoginCredentials } from "@/features/auth/types";
import { setToken, removeToken } from "@/utils/token";
import { mockUsers } from "@/features/auth/mocks/users";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true });
        
        // Giả lập network delay (Call API)
        await new Promise((resolve) => setTimeout(resolve, 800));

        const mockUser = mockUsers[credentials.email];
        
        if (mockUser && (credentials.password === "password123" || credentials.password)) {
          setToken("mock_jwt_token_123");
          set({ user: mockUser, isAuthenticated: true, isLoading: false });
        } else {
          set({ isLoading: false });
          throw new Error("Email hoặc mật khẩu không chính xác.");
        }
      },

      logout: () => {
        removeToken();
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);
