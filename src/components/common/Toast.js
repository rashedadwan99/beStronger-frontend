import { toast } from "react-toastify";

export function Toast(status = "", value, position = "bottom-left") {
  const options = {
    position,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  if (value.response && value.response.status === 400) {
    return toast[`${status}`](value.response.data.message, options);
  } else if (status === "error")
    return toast[`${status}`]("an error occured", options);
  return toast[`${status}`](value, options);
}
