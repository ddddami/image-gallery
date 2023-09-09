import { useEffect, useState } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import FileUploader from "./components/FileUploader";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/images/")
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ maxWidth: "560px" }} className="text-center container">
      <FileUploader />
      <Gallery images={images} />
    </div>
  );
};

export default App;
