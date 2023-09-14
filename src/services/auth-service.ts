import apiClient, { setAuthHeader } from "./api-client";

const tokenKey = "token";

setAuthHeader(getToken());

export function login(username: string, password: string) {
  return apiClient.post("/login", { email: username, password });
}

export function logout() {
  localStorage.removeItem(tokenKey);
  apiClient.post("/logout");
}

export function setToken(token: string) {
  localStorage.setItem(tokenKey, token);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}
