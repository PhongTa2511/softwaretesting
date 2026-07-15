// Trong thực tế, JWT token (access token) sẽ được backend gửi về và set vào HttpOnly Cookie để bảo mật.
// File này chỉ dùng tạm cho quản lý token ở client (như refresh token flow hoặc fallback) hoặc khi dùng LocalStorage (không khuyến nghị cho dự án thực).

const TOKEN_KEY = "qltest_access_token";

export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(TOKEN_KEY);
  }
};
