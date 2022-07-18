import api from "../network/baseUrl.utils";
import { GET, POST, PUT } from "../network/baseRequest.utils";

export const uploadFile = async (file) => {
  try {
    let formData = new FormData();
    formData.append("files", file);
    formData.append(
      "fileInfo",
      JSON.stringify({
        path: file.path,
        name: file.name,
        size: file.size,
        type: file.type,
      })
    );

    const postUpload = await POST(api.BASE_URL + api.ENDPOINT.upload, formData);

    if (postUpload.status === 200) {
      return postUpload;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const uploadFileFromBlob = (file) => {};
