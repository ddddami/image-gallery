import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

const getUser = () => {
  return apiClient.get<User>("/user");
};

export default { getUser };
