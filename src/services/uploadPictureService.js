import { http } from "./httpService";

export const uploadPicture = async (picture) => {
  if (!picture) return;
  const data = new FormData();
  data.append("file", picture);
  data.append("upload_preset", "beStronger");
  data.append("cloud_name", "dgbat9cg8");
  return http.post(
    "https://api.cloudinary.com/v1_1/dgbat9cg8/image/upload",
    data
  );
};
