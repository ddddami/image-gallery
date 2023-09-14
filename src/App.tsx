import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import FileUploader from "./components/FileUploader";
import LoginPage from "./pages/LoginPage";
import imageService from "./services/image-service";
import userService, { User } from "./services/user-service";
import { getToken } from "./services/auth-service";
import { FilePondFile } from "filepond";
import { Image } from "./services/image-service";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    userService
      .getUser()
      .then((res) => setUser(res.data))
      .catch((ex) => console.log(ex));
  }, []);

  useEffect(() => {
    imageService
      .getAllImages()
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ maxWidth: "560px" }} className="text-center container">
      <FileUploader
        onImageUploaded={(image: Image) => setImages([image, ...images])}
      />
      <Gallery images={images} />
    </div>
    // <LoginPage />
  );
};

export default App;
