import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import { FilePondErrorDescription, FilePondFile } from "filepond";
import "filepond/dist/filepond.min.css";
import { getToken } from "../services/auth-service";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

interface Props {
  onImageUploaded: (file: any) => void;
}

const FileUploader = ({ onImageUploaded }: Props) => {
  const handleProcessFile = (
    error: FilePondErrorDescription | null,
    file: FilePondFile
  ) => {
    if (!error) {
    } else {
      console.error("Image upload failed:", error);
    }
  };
  return (
    <div className="mt-5">
      <h2>Image Uploader</h2>
      <FilePond
        allowMultiple={true}
        maxFiles={3}
        allowReorder={false}
        allowRevert={false}
        labelIdle="Drop your images here.."
        dropOnPage={false}
        acceptedFileTypes={["image/jpeg", "image/png", "image/webp"]}
        server={{
          process: {
            url: "http://localhost:8001/api/images/",
            // onerror: (response) => {
            // serverMessage.current = JSON.parse(response);
            // },
            headers: {
              Authorization: "Bearer " + getToken(),
            },
            onload: (res: string) => {
              console.log(res);

              const { id, url } = JSON.parse(res);
              onImageUploaded({ id, url });
            },
          },
        }}
        onprocessfile={handleProcessFile}
        credits={false}
        name="image"
      />
    </div>
  );
};

export default FileUploader;
