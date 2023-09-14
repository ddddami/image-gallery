import apiClient from "./api-client";

export interface Image {
  id: number;
  url: string;
}

const apiEndpoint = "/images/";

const getAllImages = () => {
  return apiClient.get<Image[]>(apiEndpoint);
};

const getImage = (id: number) => {
  return apiClient.get<Image>(apiEndpoint + `${id}`);
};

const deleteImage = (id: number) => {
  return apiClient.delete(apiEndpoint + `${id}`);
};

const saveImage = (image: Image) => {
  return apiClient.post<Image>(apiEndpoint, image);
};

export default { getAllImages, getImage, saveImage, deleteImage };
