import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import "filepond/dist/filepond.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const FileUploader = () => {
  return (
    <div className="mt-4">
      <h2>Image Uploader</h2>
      <FilePond
        allowMultiple={true}
        maxFiles={3}
        allowReorder={false}
        allowRevert={false}
        labelIdle="Drop your images here.."
        acceptedFileTypes={["image/jpeg", "image/png", "image/webp"]}
        server="http://localhost:8000/api/images/"
        credits={false}
        name="image"
      />
    </div>
  );
};

export default FileUploader;
