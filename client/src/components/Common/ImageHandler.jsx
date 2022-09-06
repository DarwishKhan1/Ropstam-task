import { FaEdit } from "react-icons/fa";
import Placeholder from "../../assets/placeholder.png";

const ImageWithPlaceholder = ({
  fileInputHandler,
  file,
  resourceUrl = null,
}) => {
  return (
    <div className="image-upload-container mb-3">
      <div className="image-upload">
        <label htmlFor="file-input" className="label">
          <FaEdit />
        </label>
        <input
          id="file-input"
          type="file"
          name="file"
          onChange={fileInputHandler}
        />
      </div>

      <img
        className="image"
        src={
          file
            ? URL.createObjectURL(file)
            : resourceUrl
            ? resourceUrl
            : Placeholder
        }
        alt=""
      ></img>
    </div>
  );
};

export default ImageWithPlaceholder;
